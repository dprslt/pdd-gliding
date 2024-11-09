import React from 'react';
import GenericMeterCard from '../GenericMeters/GenericMeterCard';
import { fetchAllWindData } from 'services/wind/windDataFetching';
import SharedMeasureGraph from './SharedMeasureGraph';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faFlaskVial,
} from '@fortawesome/free-solid-svg-icons';

import './sharedMeasure.scss';

type SharedMeasureProps = {};

const SharedMeasure: React.FC<SharedMeasureProps> = async () => {
    const windData = await fetchAllWindData();

    return (
        <div>
            <div className="shared-measure-cards">
                {windData.opgcLive && (
                    <div className="meter-columns">
                        <h2>OPGC</h2>
                        <GenericMeterCard meterData={windData.opgcLive} />
                    </div>
                )}
                {windData.holfuyLive && (
                    <div className="meter-columns">
                        <h2 className="generic-meter-card-title">
                            Holfuy PDD Nord (1464)
                        </h2>
                        <GenericMeterCard meterData={windData.holfuyLive} />
                    </div>
                )}
                {windData.labuseLive && (
                    <Link href={'https://labuse.uiguig.ovh/devices/2'}>
                        <div className="meter-columns">
                            <h2 className="generic-meter-card-title">
                                Labuse
                                <FontAwesomeIcon
                                    className="generic-meter-card-title-icon"
                                    icon={faArrowUpRightFromSquare}
                                />
                            </h2>
                            <GenericMeterCard meterData={windData.labuseLive} />
                        </div>
                    </Link>
                )}
            </div>

            <div className="text-alert">
                <div className="warn">
                    <FontAwesomeIcon icon={faFlaskVial} />
                </div>
                <div className="text">
                    La balise Labuse est une nouvelle sorte de balise développée
                    par Guillaume T depuis plusieurs mois. Elle est encore en
                    phase de tests et de réglages. Merci a lui !
                </div>
            </div>

            <SharedMeasureGraph windData={windData} />
        </div>
    );
};

export default SharedMeasure;
