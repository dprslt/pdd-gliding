import React from 'react';
import GenericMeterCard from '../GenericMeters/GenericMeterCard';
import { fetchAllWindData } from 'services/wind/windDataFetching';
import { ResponsiveLine } from '@nivo/line';

import './sharedMeasure.scss';
import SharedMeasureGraph from './SharedMeasureGraph';
import Link from 'next/link';

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
                        <h2>Holfuy PDD Nord (1464)</h2>
                        <GenericMeterCard meterData={windData.holfuyLive} />
                    </div>
                )}
                {windData.labuseLive && (
                    <Link href={'/https://labuse.uiguig.ovh/devices'}>
                        <div className="meter-columns">
                            <h2>Labuse</h2>
                            <GenericMeterCard meterData={windData.labuseLive} />
                        </div>
                    </Link>
                )}
            </div>

            <SharedMeasureGraph windData={windData} />
        </div>
    );
};

export default SharedMeasure;
