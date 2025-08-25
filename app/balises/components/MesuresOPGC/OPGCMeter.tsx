import {
    faLocationArrow,
    faTemperatureThreeQuarters,
    faDroplet,
    faScaleUnbalanced,
    faCompass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from 'luxon';
import React from 'react';

import './opgcMeter.scss';
import { convertDegToOrientation } from 'services/wind/OrientationMapper';
import { OPGCMaxWindValues, OPGCValues } from 'services/opgc/apiGrafanaOPGC';

export type OpgcMeterProps = {
    opgcData: OPGCValues;
    maxWind?: OPGCMaxWindValues;
};

export default async function OPGCMeter({ opgcData, maxWind }: OpgcMeterProps) {
    return (
        <div className={'balise-infos-card'}>
            <div className={'balise-infos-card--container'}>
                <div className={'balise-infos-card--wind'}>
                    <div className={'balise-infos-card--wind-icon'}>
                        <FontAwesomeIcon
                            icon={faLocationArrow}
                            transform={{
                                rotate:
                                    -45 + opgcData.windAngularDirection + 180,
                            }}
                        />
                    </div>
                    <div className={'balise-infos-card--wind-speed'}>
                        {Math.round(opgcData.windSpeed)} km/h
                    </div>
                    {maxWind && (
                        <div className={'balise-infos-card--wind-max'}>
                            max. {Math.round(maxWind.windSpeedMax)} km/h
                        </div>
                    )}
                </div>
                <div className={'balise-infos-card--metering'}>
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                        <div className="meter-value">
                            {opgcData.temperature}
                            <span className="meter-unit">&deg;C</span>
                        </div>
                    </div>
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faDroplet} />
                        <div className="meter-value">
                            {Math.round(opgcData.humidity)}
                            <span className="meter-unit">%</span>
                        </div>
                    </div>
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faScaleUnbalanced} />
                        <div className="meter-value">
                            {opgcData.pressure}
                            <span className="meter-unit">hPa</span>
                        </div>
                    </div>
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faCompass} />
                        <div className="meter-value">
                            {convertDegToOrientation(
                                opgcData.windAngularDirection
                            )}
                            <span className="meter-unit">
                                {opgcData.windAngularDirection} &deg;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <span className={'balise-infos-card--time-refresh'}>
                Mis à jour{' '}
                {DateTime.fromISO(opgcData.datetime)
                    .setLocale('fr')
                    .setZone('Europe/Paris')
                    .toLocaleString(DateTime.DATETIME_MED)}
            </span>
        </div>
    );
}
