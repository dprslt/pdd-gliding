'use client';

import React from 'react';
import { WindData, fetchAllWindData } from 'services/wind/windDataFetching';
import { PointTooltipProps, ResponsiveLine } from '@nivo/line';
import { GraphData } from 'services/opgc/apiGrafanaOPGC';

import {
    convertDegToOrientation,
    numericHalfWindSegment,
} from 'services/wind/OrientationMapper';
import { BasicTooltip } from '@nivo/tooltip';

type SharedMeasureGraphProps = {
    windData: WindData;
};

const SpeedTooltip: React.FunctionComponent<PointTooltipProps> = ({
    point,
}) => {
    return (
        <BasicTooltip
            id={point.data.xFormatted}
            value={`${point.data.yFormatted} km/h  ${point.id}`}
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
            } deg) ${point.id}`}
            color={point.serieColor}
            enableChip
        />
    );
};

const SharedMeasureGraph: React.FC<SharedMeasureGraphProps> = ({
    windData,
}) => {
    return (
        <div>
            <div style={{ height: '250px' }}>
                <ResponsiveLine
                    data={
                        [
                            windData.graph.windSpeed.opgc,
                            windData.graph.windSpeed.holfuy,
                            // windData.graph.windSpeed.holfuyMax,
                            // windData.graph.windSpeed.holfuyMin,
                        ].filter((e) => e != undefined) as Array<GraphData>
                    }
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
                    pointSize={8}
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
                    data={
                        [
                            windData.graph.windDirection.opgc,
                            windData.graph.windDirection.holfuy,
                        ].filter((e) => e != undefined) as Array<GraphData>
                    }
                    margin={{ top: 10, right: 50, bottom: 30, left: 10 }}
                    xScale={{ format: '%Y-%m-%dT%H:%M:%S.%L%Z', type: 'time' }}
                    xFormat="time:%Hh%M"
                    yScale={{
                        type: 'linear',
                        min: 0,
                        max: 361,
                    }}
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
                        // format: '-d',
                        tickValues: numericHalfWindSegment,
                        format: (v) => {
                            return convertDegToOrientation(v);
                        },
                        legend: 'Direction du vent',
                        legendOffset: 40,
                        legendPosition: 'middle',
                    }}
                    enableGridX={false}
                    gridYValues={numericHalfWindSegment}
                    colors={{ scheme: 'accent' }}
                    lineWidth={0}
                    pointSize={6}
                    // pointColor={{ theme: 'background' }}
                    pointColor={{ from: 'color' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                />
            </div>
        </div>
    );
};

export default SharedMeasureGraph;
