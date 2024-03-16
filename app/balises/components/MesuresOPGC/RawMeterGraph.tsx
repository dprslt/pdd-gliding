'use client';

import { ResponsiveLine } from '@nivo/line';
import React from 'react';
import { GraphData } from '../../../../services/opgc/meter-opgc';

type RawMeterGraphProps = {
    windData: GraphData;
    orientationData: GraphData;
};

const RawMeterGraph: React.FC<RawMeterGraphProps> = ({
    windData,
    orientationData,
}) => {
    return (
        <>
            <div style={{ height: '300px' }}>
                <ResponsiveLine
                    data={[windData]}
                    margin={{ top: 50, right: 10, bottom: 30, left: 50 }}
                    xScale={{ format: '%Y-%m-%dT%H:%M:%S.%L%Z', type: 'time' }}
                    xFormat="time:%H:%M:%S"
                    yScale={{ type: 'linear' }}
                    yFormat=" >-d"
                    curve="monotoneX"
                    axisBottom={{
                        format: '%H:%M:%S',
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        format: '>-d',
                        legend: 'Force du vent moyenne (km/h)',
                        legendOffset: -40,
                        legendPosition: 'middle',
                    }}
                    enableGridX={false}
                    colors={{ scheme: 'spectral' }}
                    lineWidth={2}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                />
            </div>
            <div style={{ height: '300px' }}>
                <ResponsiveLine
                    data={[orientationData]}
                    margin={{ top: 50, right: 10, bottom: 30, left: 50 }}
                    xScale={{ format: '%Y-%m-%dT%H:%M:%S.%L%Z', type: 'time' }}
                    xFormat="time:%H:%M:%S"
                    yScale={{ type: 'linear', min: 0, max: 360 }}
                    yFormat=" >-d"
                    curve="monotoneX"
                    axisTop={null}
                    axisBottom={{
                        format: '%H:%M:%S',
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        format: '-d',
                        legend: 'Direction du vent',
                        legendOffset: -40,
                        legendPosition: 'middle',
                    }}
                    enableGridX={false}
                    colors={{ scheme: 'accent' }}
                    lineWidth={2}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                />
            </div>
        </>
    );
};

export default RawMeterGraph;
