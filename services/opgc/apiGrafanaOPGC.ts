import { DateTime } from 'luxon';
import { grafanaHistoryQueries } from './historyGrafanaQuery';
export type OPGCValues = {
    datetime: string;
    temperature: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windAngularDirection: number;
};

export type OPGCMaxWindValues = {
    datetime: string;
    windSpeedMax: number;
};

async function askGrafana<T extends any>(query: any): Promise<T> {
    const headers = new Headers();
    headers.append('accept', 'application/json, text/plain, */*');
    headers.append('content-type', 'application/json');

    const results = await fetch('https://www.opgc.fr/gf/api/ds/query', {
        method: 'POST',
        body: JSON.stringify(query),
        headers,
        next: {
            revalidate: 60,
        },
    });

    const parsedBody = await results.json();

    return parsedBody as T;
}

export async function fetchLastValuesFromGrafana(): Promise<OPGCValues | null> {
    const queries = {
        queries: [
            {
                refId: 'A',
                datasource: {
                    uid: 'EQhQeao7k',
                    type: 'postgres',
                },
                rawSql: 'SELECT\n  $__timeGroupAlias(mytime,5m) \n , sonic_v, sonic_d, temp, humi, pres, givre   \nFROM sh\nWHERE\n  $__timeFilter(mytime)\n \nORDER BY mytime DESC',
                format: 'time_series',
                datasourceId: 1,
                intervalMs: 300000,
            },
        ],
        from: `${DateTime.now().minus({ minutes: 10 }).toMillis()}`,
        to: `${DateTime.now().toMillis()}`,
    };

    const grafanaResponse = await askGrafana<any>(queries);

    const serieData = grafanaResponse.results['A'].frames[0].data.values;

    const datetime = DateTime.fromMillis(serieData[0][0]);

    if (!datetime.isValid) {
        console.error(grafanaResponse);
        return null;
    }

    return {
        datetime: datetime.toISO(),
        windSpeed: Math.round(serieData[1][0] * 3.6),
        windAngularDirection: Math.round(serieData[2][0]),
        temperature: Math.round(serieData[3][0] * 10) / 10,
        humidity: Math.round(serieData[4][0]),
        pressure: Math.round(serieData[5][0]),
    };
}

export type GraphData = {
    id: string;
    data: Array<{ x: number; y: number }>;
};

export type OPGCWindHistory = {
    wind: GraphData;
    orientation: GraphData;
};
export async function fetchWindHistoryFromGrafana(): Promise<OPGCWindHistory> {
    // Lock query range to the beginning of the last minute to improve cache hit
    const time = DateTime.now().startOf('minute');
    const query = {
        // See the attached file to edit the queries
        queries: grafanaHistoryQueries,
        from: `${time.minus({ hours: 3 }).toMillis()}`,
        to: `${time.toMillis()}`,
    };

    const grafanaResponse = await askGrafana<any>(query);

    return {
        wind: {
            id: 'wind (avg 5min)',
            data: grafanaResponse.results['B'].frames[0].data.values[0].map(
                (e: number, rank: number) => {
                    return {
                        x: DateTime.fromMillis(e).toISO(),
                        y: grafanaResponse.results['B'].frames[0].data
                            .values[1][rank],
                    };
                }
            ),
        },
        orientation: {
            id: 'orientation',
            data: grafanaResponse.results['C'].frames[0].data.values[0].map(
                (e: number, rank: number) => {
                    return {
                        x: DateTime.fromMillis(e).toISO(),
                        y: grafanaResponse.results['C'].frames[0].data
                            .values[1][rank],
                    };
                }
            ),
        },
    };
}
