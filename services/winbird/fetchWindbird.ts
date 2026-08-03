import { DateTime } from 'luxon';
import { GenericWindMeasurement } from 'services/wind/GenericWindMeasurement';

export const OPEN_WIND_MAP_URL = 'https://openwindmap.org';

export const WINBIRD_STATIONS = [
    {
        id: 2001,
        name: 'Décollage Mont Chouvé 1450m',
    },
    {
        id: 2039,
        name: 'Cornillon JOB 1130m',
    },
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

export async function fetchWindbirdLive(
    stationId: number,
): Promise<WindbirdLiveResponse> {
    const results = await fetch(
        `https://api.pioupiou.fr/v1/live/${stationId}`,
        {
            method: 'GET',
            next: {
                revalidate: 60,
            },
        },
    );

    if (!results.ok) {
        throw new Error(`Error fetching winbird live data: ${results.status}`);
    }

    return results.json();
}

export async function fetchWindbirdHistory(
    stationId: number,
): Promise<WindbirdArchiveResponse> {
    const results = await fetch(
        `https://api.pioupiou.fr/v1/archive/${stationId}?start=last-day&stop=now`,
        {
            method: 'GET',
            next: {
                revalidate: 60,
            },
        },
    );

    if (!results.ok) {
        throw new Error(
            `Error fetching winbird archive data: ${results.status}`,
        );
    }

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
