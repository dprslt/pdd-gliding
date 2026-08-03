import { DateTime } from 'luxon';
import {
    convertHolfuyMeasurementToGeneric,
    fetchHolfuyHistory,
} from 'services/holfuy/fetchPddHolfuy';
import {
    fetchWindHistoryFromGrafana,
    fetchLastValuesFromGrafana,
    convertOpgcMeasureToGeneric,
    GraphData,
} from 'services/opgc/apiGrafanaOPGC';
import {
    fetchOPGCValues,
    fetchOPGCmaxWind,
} from 'services/opgc/synthetized-txt-files';
import { GenericWindMeasurement } from './GenericWindMeasurement';
import { getLabuseData } from 'services/labuse/labuseService';
import {
    convertWindbirdArchiveToGeneric,
    convertWindbirdLiveToGeneric,
    fetchWindbirdHistory,
    fetchWindbirdLive,
    WINBIRD_STATIONS,
} from 'services/winbird/fetchWindbird';

export type WindData = {
    opgcLive: GenericWindMeasurement | null;
    holfuyLive: GenericWindMeasurement | null;
    labuseLive: GenericWindMeasurement | null;
    winbirdLive: Array<GenericWindMeasurement | null>;
    graph: {
        windSpeed: {
            opgc?: GraphData;
            holfuy?: GraphData;
            holfuyMax?: GraphData;
            holfuyMin?: GraphData;
            labuse?: GraphData;
            winbird?: Array<GraphData>;
        };
        windDirection: {
            opgc?: GraphData;
            holfuy?: GraphData;
            labuse?: GraphData;
            winbird?: Array<GraphData>;
        };
    };
};

export async function fetchAllWindData(): Promise<WindData> {
    const [
        grafanadata,
        opgcDataFromGrafana,
        maxWind,
        holfuyArchive,
        labuseGenericData,
        winbirdData,
    ] = await Promise.all([
        fetchWindHistoryFromGrafana().catch((e) => {
            console.error('Error fetching wind history from grafana');
            return null;
        }),
        fetchLastValuesFromGrafana().catch((e) => {
            console.error('Error fetching last values from grafana');
            console.error(e);
            return null;
        }),
        fetchOPGCmaxWind().catch((e) => {
            console.error('Error fetching OPGC max wind');
            console.error(e);
            return null;
        }),
        fetchHolfuyHistory().catch((e) => {
            console.error('Error fetching holfuy history');
            console.error(e);
            return null;
        }),
        // getLabuseData().catch((e) => {
        //     console.error(e);
        //     return null;
        // }),
        Promise.resolve(null),
        fetchAllWinbirdData().catch((e) => {
            console.error('Error fetching winbird data');
            console.error(e);
            return null;
        }),
    ]);

    // Fallback try to get last file
    var opgcData = opgcDataFromGrafana;
    if (!opgcData) {
        opgcData = await fetchOPGCValues();

        if (
            DateTime.fromISO(opgcData.datetime)
                .diffNow('minutes')
                .as('minutes') < -15
        ) {
            opgcData = null;
        }
    }

    // Filter out max wind data if it's too old (more than 15 minutes)
    let validMaxWind = maxWind;
    if (
        maxWind &&
        DateTime.fromISO(maxWind.datetime).diffNow('minutes').as('minutes') <
            -15
    ) {
        validMaxWind = null;
    }

    const uOpgcLive = opgcData
        ? convertOpgcMeasureToGeneric(opgcData, validMaxWind || undefined)
        : null;

    const uHolfuyLive =
        holfuyArchive && holfuyArchive.length > 0
            ? convertHolfuyMeasurementToGeneric(holfuyArchive[0])
            : null;

    const graph = grafanadata;

    const graphOPGCwind = grafanadata?.wind;
    const graphOPGCDirection = grafanadata?.orientation;

    const graphHolfuyWind = {
        id: 'Holfuy',
        data: (holfuyArchive || [])?.map((value) => {
            const genericWind = convertHolfuyMeasurementToGeneric(value);
            return {
                x: genericWind.datetime,
                y: genericWind.wind.speed,
            };
        }),
    };
    const graphHolfuyWindMax = {
        id: 'Holfuy (Rafales)',
        data: (holfuyArchive || [])?.map((value) => {
            const genericWind = convertHolfuyMeasurementToGeneric(value);
            return {
                x: genericWind.datetime,
                y: genericWind.wind.gust as number,
            };
        }),
    };
    const graphHolfuyWindMin = {
        id: 'Holfuy (Min)',
        data: (holfuyArchive || [])?.map((value) => {
            const genericWind = convertHolfuyMeasurementToGeneric(value);
            return {
                x: genericWind.datetime,
                y: genericWind.wind.min as number,
            };
        }),
    };
    const graphHolfuyDirection = {
        id: 'Holfuy',
        data: (holfuyArchive || []).map((value) => {
            const genericWind = convertHolfuyMeasurementToGeneric(value);
            return {
                x: genericWind.datetime,
                y: genericWind.wind.direction,
            };
        }),
    };

    // const labuseLive = labuseGenericData?.liveData || null;
    // const labuseGraphWind = labuseGenericData?.history.windSpeed;
    // const labuseGraphOrientation = labuseGenericData?.history.windOrientation;

    const labuseLive = null;
    const labuseGraphWind = undefined;
    const labuseGraphOrientation = undefined;

    const winbirdLive = winbirdData?.live || [];
    const winbirdGraphWind = winbirdData?.graphWindSpeed;
    const winbirdGraphDirection = winbirdData?.graphWindDirection;

    return {
        opgcLive: uOpgcLive,
        holfuyLive: uHolfuyLive,
        labuseLive,
        winbirdLive,
        graph: {
            windSpeed: {
                opgc: graphOPGCwind,
                holfuy: graphHolfuyWind,
                holfuyMax: graphHolfuyWindMax,
                holfuyMin: graphHolfuyWindMin,
                labuse: labuseGraphWind,
                winbird: winbirdGraphWind,
            },
            windDirection: {
                opgc: graphOPGCDirection,
                holfuy: graphHolfuyDirection,
                labuse: labuseGraphOrientation,
                winbird: winbirdGraphDirection,
            },
        },
    };
}

type AllWinbirdData = {
    live: Array<GenericWindMeasurement | null>;
    graphWindSpeed: Array<GraphData>;
    graphWindDirection: Array<GraphData>;
};

async function fetchAllWinbirdData(): Promise<AllWinbirdData> {
    const stationsData = await Promise.all(
        WINBIRD_STATIONS.map(async (station) => {
            const [live, archive] = await Promise.all([
                fetchWindbirdLive(station.id).catch((e) => {
                    console.error(
                        `Error fetching winbird ${station.id} live`,
                    );
                    console.error(e);
                    return null;
                }),
                fetchWindbirdHistory(station.id).catch((e) => {
                    console.error(
                        `Error fetching winbird ${station.id} history`,
                    );
                    console.error(e);
                    return null;
                }),
            ]);

            const history =
                archive && archive.data.length > 0
                    ? convertWindbirdArchiveToGeneric(archive)
                    : [];

            return {
                name: station.name,
                live: live
                    ? convertWindbirdLiveToGeneric(live)
                    : null,
                history,
            };
        }),
    );

    return {
        live: stationsData.map((station) => station.live),
        graphWindSpeed: stationsData.map((station) => ({
            id: station.name,
            data: station.history.map((measurement) => ({
                x: measurement.datetime,
                y: measurement.wind.speed,
            })),
        })),
        graphWindDirection: stationsData.map((station) => ({
            id: station.name,
            data: station.history.map((measurement) => ({
                x: measurement.datetime,
                y: measurement.wind.direction,
            })),
        })),
    };
}
