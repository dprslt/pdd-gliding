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

async function buildOPGCDataFromFiles() {
    const [opgcvalues, opgcValuesMaxSpeed] = await Promise.all([
        fetchOPGCValues(),
        fetchOPGCmaxWind(),
    ]);

    const opgcdata = {
        ...opgcvalues,
        maxWindSpeed: opgcValuesMaxSpeed.windSpeedMax,
    };

    return opgcdata;
}

export default async function RawMeterOPGC() {
    const [grafanadata, opgcData, maxWind] = await Promise.all([
        fetchWindHistoryFromGrafana(),
        fetchLastValuesFromGrafana(),
        fetchOPGCmaxWind(),
    ]);

    // const opgcdata = await buildOPGCDataFromFiles();

    return (
        <div>
            {opgcData ? (
                <OPGCMeter opgcData={opgcData} maxWind={maxWind} />
            ) : (
                <PictureFromOPGC />
            )}
            <OPGCChartsFromGrafana
                windData={grafanadata.wind}
                orientationData={grafanadata.orientation}
            />
            {/* <RawMeterGraph data={[grafanadata.orientation as any]} /> */}
        </div>
    );
}
