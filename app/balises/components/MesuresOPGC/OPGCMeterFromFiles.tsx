import {
    faLocationArrow,
    faTemperatureThreeQuarters,
    faDroplet,
    faScaleUnbalanced,
    faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from 'luxon';
import React from 'react';
import {
    fetchOPGCValues,
    fetchOPGCmaxWind,
} from '../../../../services/opgc/meter-opgc';

import './opgcMeterFromFiles.scss';

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

export default async function OPGCMeterFromFiles() {
    const opgcdata = await buildOPGCDataFromFiles();

    return (
        <div className={'balise-infos-card'}>
            <div className={'balise-infos-card--container'}>
                <div className={'balise-infos-card--wind'}>
                    <div className={'balise-infos-card--wind-icon'}>
                        <FontAwesomeIcon
                            icon={faLocationArrow}
                            transform={{
                                rotate:
                                    -45 + opgcdata.windAngularDirection + 180,
                            }}
                        />
                    </div>
                    <div className={'balise-infos-card--wind-speed'}>
                        {Math.round(opgcdata.windSpeed)} km/h
                    </div>
                    <div className={'balise-infos-card--wind-max'}>
                        {Math.round(opgcdata.maxWindSpeed)} km/h
                    </div>
                </div>
                <div className={'balise-infos-card--metering'}>
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                        <div className="meter-value">
                            {opgcdata.temperature}
                            <span className="meter-unit">&deg;C</span>
                        </div>
                    </div>
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faDroplet} />
                        <div className="meter-value">
                            {opgcdata.humidity}
                            <span className="meter-unit">%</span>
                        </div>
                    </div>
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faScaleUnbalanced} />
                        <div className="meter-value">
                            {opgcdata.pressure}
                            <span className="meter-unit">hPa</span>
                        </div>
                    </div>
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faWind} />
                        <div className="meter-value">
                            {opgcdata.windAngularDirection}
                            <span className="meter-unit">&deg;</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className={'balise-infos-card--time-refresh'}>
                Mis à jour{' '}
                {DateTime.fromISO(opgcdata.datetime)
                    .setLocale('fr')
                    .toRelative({ unit: 'minutes' })}
            </span>
        </div>
    );
}
