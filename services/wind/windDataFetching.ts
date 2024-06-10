import { DateTime } from 'luxon';
import {
    convertHolfuyMeasurementToGeneric,
    fetchHolfuyHistory,
} from 'services/holfuy/fetchPddHolfuy';
import {
    fetchWindHistoryFromGrafana,
    fetchLastValuesFromGrafana,
    convertOpgcMeasureToGeneric,
    OPGCWindHistory,
} from 'services/opgc/apiGrafanaOPGC';
import {
    fetchOPGCValues,
    fetchOPGCmaxWind,
} from 'services/opgc/synthetized-txt-files';
import { GenericWindMeasurement } from './GenericWindMeasurement';

export type WindData = {
    opgcLive: GenericWindMeasurement | null;
    holfuyLive: GenericWindMeasurement | null;
    graph: OPGCWindHistory;
};

export async function fetchAllWindData(): Promise<WindData> {
    const [grafanadata, opgcDataFromGrafana, maxWind, holfuyArchive] =
        await Promise.all([
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

    return {
        opgcLive: uOpgcLive,
        holfuyLive: uHolfuyLive,
        graph,
    };
}
