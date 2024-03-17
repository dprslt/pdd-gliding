'use server';

import React from 'react';
import {
    fetchLastValuesFromGrafana,
    fetchWindHistoryFromGrafana,
} from '../../../../services/opgc/apiGrafanaOPGC';

import OPGCChartsFromGrafana from './OPGCChartsFromGrafana';
import OPGCMeter from './OPGCMeter';
import {
    fetchOPGCValues,
    fetchOPGCmaxWind,
} from 'services/opgc/synthetized-txt-files';
import PictureFromOPGC from './PictureFromOPGC';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkSlash, faWarning } from '@fortawesome/free-solid-svg-icons';

export default async function RawMeterOPGC() {
    const [grafanadata, opgcDataFromGrafana, maxWind] = await Promise.all([
        fetchWindHistoryFromGrafana().catch((e) => console.error(e)),
        fetchLastValuesFromGrafana().catch((e) => console.error(e)),
        fetchOPGCmaxWind().catch((e) => console.error(e)),
    ]);

    // const opgcdata = await buildOPGCDataFromFiles();

    var opgcData = opgcDataFromGrafana;

    // First Fallback try to get last file
    if (!opgcData) {
        opgcData = await fetchOPGCValues();

        console.log(
            DateTime.fromISO(opgcData.datetime)
                .diffNow('minutes')
                .as('minutes') < -15
        );

        if (
            DateTime.fromISO(opgcData.datetime)
                .diffNow('minutes')
                .as('minutes') < -15
        ) {
            opgcData = null;
        }
    }

    return (
        <div>
            {opgcData && maxWind ? (
                <OPGCMeter opgcData={opgcData} maxWind={maxWind} />
            ) : (
                <>
                    {/* Last chance fallback if files are unavailable */}
                    <PictureFromOPGC />
                    <div className="text-alert">
                        <div className="warn">
                            <FontAwesomeIcon icon={faLinkSlash} />
                        </div>
                        <div className="text">
                            Impossible d&apos;accéder aux données en temps réel
                        </div>
                    </div>
                </>
            )}
            {grafanadata?.wind &&
            grafanadata?.orientation &&
            (grafanadata?.wind?.data?.length || 0) > 0 ? (
                <OPGCChartsFromGrafana
                    windData={grafanadata.wind}
                    orientationData={grafanadata.orientation}
                />
            ) : (
                <div className="text-alert">
                    <div className="warn">
                        <FontAwesomeIcon icon={faLinkSlash} />
                    </div>
                    <div className="text">
                        Désolé, les données d&apos;historique de l&apos;OPGC
                        sont indisponibles
                    </div>
                </div>
            )}
            {/* <RawMeterGraph data={[grafanadata.orientation as any]} /> */}
        </div>
    );
}
