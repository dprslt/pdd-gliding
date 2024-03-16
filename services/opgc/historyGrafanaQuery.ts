export const grafanaHistoryQueries = [
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
];
