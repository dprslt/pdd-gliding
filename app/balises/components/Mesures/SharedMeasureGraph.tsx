'use client';

import React from 'react';
import { WindData } from 'services/wind/windDataFetching';
import { LineSeries, PointTooltipProps, ResponsiveLine } from '@nivo/line';
import { GraphData } from 'services/opgc/apiGrafanaOPGC';

import {
    convertDegToOrientation,
    numericHalfWindSegment,
} from 'services/wind/OrientationMapper';
import { BasicTooltip } from '@nivo/tooltip';

type SharedMeasureGraphProps = {
    windData: WindData;
};

const getColorById = (series: { id: string }) => {
    switch (series.id) {
        case 'OPGC (5min)':
            return '#a7001e';
        case 'Holfuy':
            return '#ffcb1e'; // Green for Holfuy average
        default:
            return '#' + Math.floor(Math.random() * 16777215).toString(16); // Random color fallback
    }
};

const SpeedTooltip: React.FunctionComponent<PointTooltipProps<LineSeries>> = ({
    point,
}) => {
    return (
        <BasicTooltip
            id={point.data.xFormatted}
            value={`${point.data.yFormatted} km/h - ${point.seriesId}`}
            color={point.seriesColor}
            enableChip
        />
    );
};

const OrientationTooltip: React.FunctionComponent<
    PointTooltipProps<LineSeries>
> = ({ point }) => {
    return (
        <BasicTooltip
            id={point.data.xFormatted}
            value={`${convertDegToOrientation(point.data.y as number)} (${
                point.data.yFormatted
            } deg) - ${point.seriesId}`}
            color={point.seriesColor}
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
                            // windData.graph.windSpeed.labuse,
                            // windData.graph.windSpeed.holfuyMax,
                            // windData.graph.windSpeed.holfuyMin,
                        ].filter(
                            (e) => e != undefined && e.data.length > 0
                        ) as Array<GraphData>
                    }
                    margin={{ top: 30, right: 50, bottom: 30, left: 10 }}
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
                    colors={getColorById}
                    lineWidth={2}
                    pointSize={0}
                    enableTouchCrosshair={true}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'top',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: -25,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 100,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]}
                />
            </div>
            <div style={{ height: '250px' }}>
                <ResponsiveLine
                    data={
                        [
                            windData.graph.windDirection.opgc,
                            windData.graph.windDirection.holfuy,
                            // windData.graph.windDirection.labuse,
                        ].filter(
                            (e) => e != undefined && e.data.length > 0
                        ) as Array<GraphData>
                    }
                    margin={{ top: 30, right: 50, bottom: 30, left: 10 }}
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
                    colors={getColorById}
                    lineWidth={0}
                    pointSize={6}
                    pointColor={({ series }) => series.color}
                    pointBorderColor={({ seriesColor }) => seriesColor}
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'top',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: -25,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 100,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default SharedMeasureGraph;
