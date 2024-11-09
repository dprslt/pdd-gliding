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

export type WindData = {
    opgcLive: GenericWindMeasurement | null;
    holfuyLive: GenericWindMeasurement | null;
    labuseLive: GenericWindMeasurement | null;
    graph: {
        windSpeed: {
            opgc?: GraphData;
            holfuy?: GraphData;
            holfuyMax?: GraphData;
            holfuyMin?: GraphData;
            labuse?: GraphData;
        };
        windDirection: {
            opgc?: GraphData;
            holfuy?: GraphData;
            labuse?: GraphData;
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
    ] = await Promise.all([
        fetchWindHistoryFromGrafana().catch((e) => {
            console.error(e);
            return null;
        }),
        fetchLastValuesFromGrafana().catch((e) => {
            console.error(e);
            return null;
        }),
        fetchOPGCmaxWind().catch((e) => {
            console.error(e);
            return null;
        }),
        fetchHolfuyHistory().catch((e) => {
            console.error(e);
            return null;
        }),
        getLabuseData().catch((e) => {
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

    const uOpgcLive = opgcData
        ? convertOpgcMeasureToGeneric(opgcData, maxWind || undefined)
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

    const labuseLive = labuseGenericData?.liveData || null;
    const labuseGraphWind = labuseGenericData?.history.windSpeed;
    const labuseGraphOrientation = labuseGenericData?.history.windOrientation;

    return {
        opgcLive: uOpgcLive,
        holfuyLive: uHolfuyLive,
        labuseLive,
        graph: {
            windSpeed: {
                opgc: graphOPGCwind,
                holfuy: graphHolfuyWind,
                holfuyMax: graphHolfuyWindMax,
                holfuyMin: graphHolfuyWindMin,
                labuse: labuseGraphWind,
            },
            windDirection: {
                opgc: graphOPGCDirection,
                holfuy: graphHolfuyDirection,
                labuse: labuseGraphOrientation,
            },
        },
    };
}
