import React from 'react';
import GenericMeterCard from '../GenericMeters/GenericMeterCard';
import { fetchAllWindData } from 'services/wind/windDataFetching';
import SharedMeasureGraph from './SharedMeasureGraph';
import Link from 'next/link';

import './sharedMeasure.scss';
import GenericMeterCardTitle from '../GenericMeters/GenericMeterCardTitle';
import {
    WINBIRD_COLORS,
    WINBIRD_STATIONS,
} from 'services/winbird/fetchWindbird';

type SharedMeasureProps = {};

const SharedMeasure: React.FC<SharedMeasureProps> = async () => {
    const windData = await fetchAllWindData();

    return (
        <div>
            <div className="shared-measure-cards">
                {windData.holfuyLive && (
                    <Link
                        href={'https://holfuy.com/fr/weather/1464'}
                        className="meter-columns"
                    >
                        <GenericMeterCardTitle hasLink>
                            Holfuy PDD Nord (1464)
                        </GenericMeterCardTitle>
                        <GenericMeterCard
                            meterData={windData.holfuyLive}
                            color={'#ffcb1e'}
                        />
                    </Link>
                )}
                {windData.opgcLive && (
                    <div className="meter-columns">
                        <GenericMeterCardTitle>OPGC</GenericMeterCardTitle>
                        <GenericMeterCard meterData={windData.opgcLive} />
                    </div>
                )}
                {WINBIRD_STATIONS.map((station, index) => {
                    const liveData = windData.winbirdLive[index];
                    if (!liveData) {
                        return null;
                    }
                    return (
                        <Link
                            key={station.id}
                            href={station.detailUrl}
                            className="meter-columns"
                        >
                            <GenericMeterCardTitle hasLink>
                                {station.name}
                            </GenericMeterCardTitle>
                            <GenericMeterCard
                                meterData={liveData}
                                color={WINBIRD_COLORS[index]}
                            />
                        </Link>
                    );
                })}
                {/* {windData.labuseLive && (
                    <Link
                        href={'https://labuse.uiguig.ovh/devices/2'}
                        className="meter-columns"
                    >
                        <GenericMeterCardTitle hasLink>
                            Labuse
                        </GenericMeterCardTitle>

                        <GenericMeterCard meterData={windData.labuseLive} />
                    </Link>
                )} */}
            </div>

            {/* <div className="text-alert">
                <div className="warn">
                    <FontAwesomeIcon icon={faFlaskVial} />
                </div>
                <div className="text">
                    La balise Labuse est une nouvelle sorte de balise développée
                    par Guillaume T depuis plusieurs mois. Elle est encore en
                    phase de tests et de réglages. Merci a lui !
                </div>
            </div> */}

            <SharedMeasureGraph windData={windData} />
        </div>
    );
};

export default SharedMeasure;
