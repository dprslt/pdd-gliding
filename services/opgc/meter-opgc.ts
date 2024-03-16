import { DateTime } from 'luxon';
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

export async function fetchOPGCValues(): Promise<OPGCValues> {
    const request = await fetch(
        'https://wwwobs.univ-bpclermont.fr/observ/chimie/pdd.txt',
        { next: { revalidate: 60 } }
    );

    const text = await request.text();
    const lines = text.split('\n');

    const data = lines[1]
        .split(' ')
        .filter((e) => e !== '')
        .map((t) => Number.parseFloat(t));

    const [
        day,
        month,
        year,
        hour,
        minute,
        temperature,
        humidity,
        pressure,
        windSpeed,
        windAngularDirection,
    ] = data;

    const dt = DateTime.local(year, month, day, hour, minute, 0, {
        zone: 'Europe/Paris',
    });

    if (!dt.isValid) {
        console.error(data);
        throw new Error('Unable to parse datetime from received data');
    }

    return {
        datetime: dt.toISO(),
        temperature,
        humidity,
        pressure,
        windSpeed: windSpeed * 3.6,
        windAngularDirection,
    };
}
export async function fetchOPGCmaxWind(): Promise<OPGCMaxWindValues> {
    const request = await fetch(
        'https://wwwobs.univ-bpclermont.fr/observ/chimie/Vmax_pdd.txt',
        { next: { revalidate: 60 } }
    );

    const text = await request.text();
    const lines = text.split('\n');

    const data = lines[1]
        .split(' ')
        .filter((e) => e !== '')
        .map((t) => Number.parseFloat(t));

    const [day, month, year, hour, minute, windSpeedMax] = data;

    const dt = DateTime.local(year, month, day, hour, minute, 0, {
        zone: 'Europe/Paris',
    });

    if (!dt.isValid) {
        console.error(data);
        throw new Error('Unable to parse datetime from received MAX data');
    }

    return {
        datetime: dt.toISO(),
        windSpeedMax: windSpeedMax * 3.6,
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
export async function fetchWindHistoryFromGafana(): Promise<OPGCWindHistory> {
    const query = {
        queries: [
            {
                datasource: {
                    uid: 'EQhQeao7k',
                    type: 'postgres',
                },
                format: 'time_series',
                group: [],
                hide: true,
                metricColumn: 'none',
                rawQuery: false,
                rawSql: 'SELECT\n  mytime AS "time",\n  sonic_v AS "sonic_v"\nFROM sh\nWHERE\n  $__timeFilter(mytime)\nORDER BY 1',
                refId: 'A',
                select: [
                    [
                        {
                            params: ['sonic_v'],
                            type: 'column',
                        },
                        {
                            params: ['sonic_v'],
                            type: 'alias',
                        },
                    ],
                ],
                table: 'sh',
                timeColumn: 'mytime',
                timeColumnType: 'timestamp',
                where: [
                    {
                        name: '$__timeFilter',
                        params: [],
                        type: 'macro',
                    },
                ],
                datasourceId: 1,
                intervalMs: 300000,
                maxDataPoints: 304,
            },
            {
                datasource: {
                    type: '__expr__',
                    uid: '__expr__',
                },
                downsampler: 'mean',
                expression: '$A*3.6',
                hide: false,
                refId: 'B',
                type: 'math',
                upsampler: 'fillna',
            },

            {
                datasource: {
                    uid: 'EQhQeao7k',
                    type: 'postgres',
                },
                format: 'time_series',
                group: [],
                hide: false,
                metricColumn: 'none',
                rawQuery: false,
                rawSql: 'SELECT\n  mytime AS "time",\n  sonic_d AS "sonic_d"\nFROM sh\nWHERE\n  $__timeFilter(mytime)\nORDER BY 1',
                refId: 'C',
                select: [
                    [
                        {
                            params: ['sonic_d'],
                            type: 'column',
                        },
                        {
                            params: ['sonic_d'],
                            type: 'alias',
                        },
                    ],
                ],
                table: 'sh',
                timeColumn: 'mytime',
                timeColumnType: 'timestamp',
                where: [
                    {
                        name: '$__timeFilter',
                        params: [],
                        type: 'macro',
                    },
                ],
                datasourceId: 1,
                intervalMs: 300000,
                maxDataPoints: 304,
            },
        ],

        from: DateTime.now().minus({ hours: 3 }).toMillis() + '',
        to: DateTime.now().toMillis() + '',
    };

    console.log(query);

    const headers = new Headers();
    headers.append('accept', 'application/json, text/plain, */*');
    headers.append('content-type', 'application/json');

    const results = await fetch('https://www.opgc.fr/gf/api/ds/query', {
        method: 'POST',
        body: JSON.stringify(query),
        headers,
    });

    const parsedBody = await results.json();

    return {
        wind: {
            id: 'wind (avg 5min)',
            data: parsedBody.results['B'].frames[0].data.values[0].map(
                (e: number, rank: number) => {
                    return {
                        x: DateTime.fromMillis(e).toISO(),
                        y: parsedBody.results['B'].frames[0].data.values[1][
                            rank
                        ],
                    };
                }
            ),
        },
        orientation: {
            id: 'orientation',
            data: parsedBody.results['C'].frames[0].data.values[0].map(
                (e: number, rank: number) => {
                    return {
                        x: DateTime.fromMillis(e).toISO(),
                        y: parsedBody.results['C'].frames[0].data.values[1][
                            rank
                        ],
                    };
                }
            ),
        },
    };
}
