'use client';

import { LineSeries, PointTooltipProps, ResponsiveLine } from '@nivo/line';
import { BasicTooltip } from '@nivo/tooltip';
import React from 'react';
import { GraphData } from '../../../../services/opgc/apiGrafanaOPGC';
import {
    convertDegToOrientation,
    numericHalfWindSegment,
} from 'services/wind/OrientationMapper';
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type OPGCChartsFromGrafanaProps = {
    windData?: GraphData;
    orientationData?: GraphData;
};

const SpeedTooltip: React.FunctionComponent<PointTooltipProps<LineSeries>> = ({
    point,
}) => {
    return (
        <BasicTooltip
            id={point.data.xFormatted}
            value={`${point.data.yFormatted} km/h`}
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
            } deg)`}
            color={point.seriesColor}
            enableChip
        />
    );
};

const OPGCChartsFromGrafana: React.FC<OPGCChartsFromGrafanaProps> = ({
    windData,
    orientationData,
}) => {
    if (!windData || !orientationData || windData.data.length === 0) {
        return (
            <div className="text-alert">
                <div className="warn">
                    <FontAwesomeIcon icon={faLinkSlash} />
                </div>
                <div className="text">
                    Désolé, les données d&apos;historique de l&apos;OPGC sont
                    indisponibles
                </div>
            </div>
        );
    }

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
                    data={[orientationData]}
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
        </>
    );
};

export default OPGCChartsFromGrafana;
