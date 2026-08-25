import { DateTime } from 'luxon';
import { GenericWindMeasurement } from 'services/wind/GenericWindMeasurement';

export const OPEN_WIND_MAP_URL = 'https://openwindmap.org';

export const WINBIRD_COLORS = ['#3f9fff', '#8f7fff'] as const;

export const WINBIRD_HISTORY_HOURS = 6;

export const WINBIRD_STATIONS = [
    {
        id: 2208,
        name: 'Déco Nord 1450m',
        shortName: 'PDD Nord',
        detailUrl: 'https://www.openwindmap.org/windbird-2208',
    },
    // {
    //     id: 2209,
    //     name: 'Déco Sud 1400m',
    //     shortName: 'PDD Sud',
    //     detailUrl: 'https://www.openwindmap.org/windbird-2209',
    // }
] as const;

export type WindbirdLiveResponse = {
    data: {
        id: number;
        meta: {
            name: string;
        };
        location: {
            latitude: number;
            longitude: number;
            date: string | null;
            success: boolean;
        };
        measurements: {
            date: string;
            pressure: number | null;
            wind_heading: number | null;
            wind_speed_avg: number | null;
            wind_speed_max: number | null;
            wind_speed_min: number | null;
        };
        status: {
            date: string;
            snr: number | null;
            state: 'on' | 'off' | null;
        };
    };
};

export type WindbirdArchiveResponse = {
    legend: Array<string>;
    units: Array<string>;
    data: Array<
        [
            string,
            number,
            number,
            number,
            number,
            number,
            number,
            number | null,
        ]
    >;
};

async function fetchWithRetry(url: string, attempts = 3): Promise<Response> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt < attempts; attempt++) {
        if (attempt > 0) {
            await new Promise((resolve) => setTimeout(resolve, 1500));
        }

        const results = await fetch(url, {
            method: 'GET',
            next: {
                revalidate: 60,
            },
        });

        if (results.ok) {
            return results;
        }

        lastError = new Error(
            `Error fetching winbird data: ${results.status}`,
        );
    }

    throw lastError;
}

export async function fetchWindbirdLive(
    stationId: number,
): Promise<WindbirdLiveResponse> {
    const results = await fetchWithRetry(
        `https://api.pioupiou.fr/v1/live/${stationId}`,
    );

    return results.json();
}

export async function fetchWindbirdHistory(
    stationId: number,
): Promise<WindbirdArchiveResponse> {
    const start = DateTime.now()
        .toUTC()
        .minus({ hours: WINBIRD_HISTORY_HOURS })
        .toISO();
    const stop = DateTime.now().toUTC().toISO();

    const results = await fetchWithRetry(
        `https://api.pioupiou.fr/v1/archive/${stationId}?start=${start}&stop=${stop}`,
    );

    return results.json();
}

export function convertWindbirdLiveToGeneric(
    liveResponse: WindbirdLiveResponse,
): GenericWindMeasurement {
    const { measurements } = liveResponse.data;

    const datetime = DateTime.fromISO(measurements.date, { zone: 'utc' });

    if (!datetime.isValid) {
        throw new Error('Invalid timestamp');
    }

    return {
        datetime: datetime.toISO(),
        wind: {
            speed: measurements.wind_speed_avg as number,
            gust: measurements.wind_speed_max as number,
            min: measurements.wind_speed_min as number,
            direction: measurements.wind_heading as number,
        },
    };
}

export function convertWindbirdArchiveToGeneric(
    archiveResponse: WindbirdArchiveResponse,
): Array<GenericWindMeasurement> {
    const windSpeedAvgIndex = archiveResponse.legend.indexOf(
        'wind_speed_avg',
    );
    const windSpeedMaxIndex = archiveResponse.legend.indexOf(
        'wind_speed_max',
    );
    const windSpeedMinIndex = archiveResponse.legend.indexOf(
        'wind_speed_min',
    );
    const windHeadingIndex = archiveResponse.legend.indexOf('wind_heading');

    return archiveResponse.data.map((entry) => {
        const datetime = DateTime.fromISO(entry[0], { zone: 'utc' });

        if (!datetime.isValid) {
            throw new Error('Invalid timestamp');
        }

        return {
            datetime: datetime.toISO(),
            wind: {
                speed: entry[windSpeedAvgIndex] as number,
                gust: entry[windSpeedMaxIndex] as number,
                min: entry[windSpeedMinIndex] as number,
                direction: entry[windHeadingIndex] as number,
            },
        };
    });
}
