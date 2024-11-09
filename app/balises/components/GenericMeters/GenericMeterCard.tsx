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
import { GenericWindMeasurement } from 'services/wind/GenericWindMeasurement';
import { convertDegToOrientation } from 'services/wind/OrientationMapper';

// TODO rename this file
import '../MesuresOPGC/opgcMeter.scss';
import './genericMeterCard.scss';

type GenericMeterCardProps = {
    meterData: GenericWindMeasurement;
};

const convertWindOrientationToIconRotation = (direction: number): number =>
    -45 + direction + 180;

const GenericMeterCard: React.FC<GenericMeterCardProps> = ({ meterData }) => {
    return (
        <div className={'balise-infos-card'}>
            <div className={'balise-infos-card--container'}>
                <div className={'balise-infos-card--wind'}>
                    <div className={'balise-infos-card--wind-icon'}>
                        <FontAwesomeIcon
                            icon={faLocationArrow}
                            transform={{
                                rotate: convertWindOrientationToIconRotation(
                                    meterData.wind.direction
                                ),
                            }}
                        />
                    </div>
                    <div className={'balise-infos-card--wind-min'}>
                        {meterData.wind.min !== undefined && (
                            <>min. {Math.round(meterData.wind.min)} km/h</>
                        )}
                    </div>
                    <div className={'balise-infos-card--wind-speed'}>
                        {Math.round(meterData.wind.speed)} km/h
                    </div>
                    {meterData.wind.gust !== undefined && (
                        <div className={'balise-infos-card--wind-max'}>
                            max. {Math.round(meterData.wind.gust)} km/h
                        </div>
                    )}
                </div>
                <div className={'balise-infos-card--metering'}>
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                        <div className="meter-value">
                            {meterData.temperature}
                            <span className="meter-unit">&deg;C</span>
                        </div>
                    </div>
                    {meterData.humidity && (
                        <div className="balise-infos-card--meter">
                            <FontAwesomeIcon icon={faDroplet} />
                            <div className="meter-value">
                                {Math.round(meterData.humidity)}
                                <span className="meter-unit">%</span>
                            </div>
                        </div>
                    )}
                    {meterData.pressure && (
                        <div className="balise-infos-card--meter">
                            <FontAwesomeIcon icon={faScaleUnbalanced} />
                            <div className="meter-value">
                                {meterData.pressure}
                                <span className="meter-unit">hPa</span>
                            </div>
                        </div>
                    )}
                    <div className="balise-infos-card--meter">
                        <FontAwesomeIcon icon={faCompass} />
                        <div className="meter-value">
                            {convertDegToOrientation(meterData.wind.direction)}
                            <span className="meter-unit">
                                {meterData.wind.direction} &deg;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <span className={'balise-infos-card--time-refresh'}>
                Mis à jour{' '}
                {DateTime.fromISO(meterData.datetime)
                    .setLocale('fr')
                    .setZone('Europe/Paris')
                    .toLocaleString(DateTime.DATETIME_MED)}
            </span>
        </div>
    );
};

export default GenericMeterCard;
