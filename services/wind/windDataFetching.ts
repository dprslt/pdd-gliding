import { DateTime } from 'luxon';
import { fetchHolfuyHistory } from 'services/holfuy/fetchPddHolfuy';
import {
    fetchWindHistoryFromGrafana,
    fetchLastValuesFromGrafana,
    convertOpgcMeasureToGeneric,
} from 'services/opgc/apiGrafanaOPGC';
import {
    fetchOPGCValues,
    fetchOPGCmaxWind,
} from 'services/opgc/synthetized-txt-files';

export async function fetchAllWindData() {
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

    const uHlfuyLive = holfuyArchive ? holfuholfuyArchive[0] : null;
}
