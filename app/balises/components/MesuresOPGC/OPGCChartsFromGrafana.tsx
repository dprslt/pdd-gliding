'use client';

import { PointTooltipProps, ResponsiveLine } from '@nivo/line';
import { BasicTooltip } from '@nivo/tooltip';
import React from 'react';
import { GraphData } from '../../../../services/opgc/apiGrafanaOPGC';
import { DateTime } from 'luxon';
import { convertDegToOrientation } from 'services/wind/OrientationMapper';

type OPGCChartsFromGrafanaProps = {
    windData: GraphData;
    orientationData: GraphData;
};

const SpeedTooltip: React.FunctionComponent<PointTooltipProps> = ({
    point,
}) => {
    return (
        <BasicTooltip
            id={point.data.xFormatted}
            value={`${point.data.yFormatted} km/h`}
            color={point.serieColor}
            enableChip
        />
    );
};

const OrientationTooltip: React.FunctionComponent<PointTooltipProps> = ({
    point,
}) => {
    return (
        <BasicTooltip
            id={point.data.xFormatted}
            value={`${convertDegToOrientation(point.data.y as number)} (${
                point.data.yFormatted
            } deg)`}
            color={point.serieColor}
            enableChip
        />
    );
};

const OPGCChartsFromGrafana: React.FC<OPGCChartsFromGrafanaProps> = ({
    windData,
    orientationData,
}) => {
    return (
        <>
            <div style={{ height: '250px' }}>
                <ResponsiveLine
                    data={[windData]}
                    margin={{ top: 10, right: 50, bottom: 30, left: 10 }}
                    xScale={{ format: '%Y-%m-%dT%H:%M:%S.%L%Z', type: 'time' }}
                    xFormat="time:%Hh%M"
                    yScale={{ type: 'linear' }}
                    yFormat=">-d"
                    curve="monotoneX"
                    axisBottom={{
                        format: '%Hh%M',
                        tickValues: 'every hour',
                    }}
                    tooltip={SpeedTooltip}
                    axisRight={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        format: '>-d',
                        legend: 'Force du vent moyenne (km/h)',
                        legendOffset: 40,
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
            <div style={{ height: '250px' }}>
                <ResponsiveLine
                    data={[orientationData]}
                    margin={{ top: 10, right: 50, bottom: 30, left: 10 }}
                    xScale={{ format: '%Y-%m-%dT%H:%M:%S.%L%Z', type: 'time' }}
                    xFormat="time:%Hh%M"
                    yScale={{ type: 'linear', min: 0, max: 360 }}
                    yFormat=" >-d"
                    curve="monotoneX"
                    axisTop={null}
                    axisBottom={{
                        format: '%Hh%M',
                        tickValues: 'every hour',
                    }}
                    tooltip={OrientationTooltip}
                    axisRight={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        format: '-d',
                        legend: 'Direction du vent',
                        legendOffset: 40,
                        legendPosition: 'middle',
                    }}
                    enableGridX={false}
                    colors={{ scheme: 'accent' }}
                    lineWidth={0}
                    pointSize={8}
                    // pointColor={{ theme: 'background' }}
                    pointColor={{ from: 'color' }}
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

export default OPGCChartsFromGrafana;
