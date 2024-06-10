import { DateTime } from 'luxon';
import { GenericWindMeasurement } from 'services/wind/GenericWindMeasurement';

export async function fetchHolfuyPdd(): Promise<any> {
    const results = await fetch(
        'https://api.holfuy.com/live/' +
            new URLSearchParams({
                s: '1464',
                m: 'JSON',
                su: 'km/h',
            }).toString(),
        {
            method: 'POST',
            body: `sw:${process.env.HOLFUY_PASSWD}`,
            next: {
                revalidate: 60,
            },
        }
    );

    return results.json();
}

export type HolfuyMeasurement = {
    dateTime: string;
    dataCount: number;
    secondsBack: number;
    wind: {
        speed: number;
        gust: number;
        min: number;
        direction: number;
    };
    temperature: number;
};

export type HolfuyArchiveResponse = {
    stationId: number;
    speedUnit: string;
    tempUnit: string;
    measurements: Array<HolfuyMeasurement>;
};

export function convertHolfuyMeasurementToGeneric(
    measurement: HolfuyMeasurement
): GenericWindMeasurement {
    const datetime = DateTime.fromSQL(measurement.dateTime, {
        zone: 'Europe/Paris',
        locale: 'fr',
    });

    if (!datetime.isValid) {
        throw new Error('Invalid timestamp');
    }
    return {
        datetime: datetime.toISO(),
        wind: {
            speed: measurement.wind.speed,
            gust: measurement.wind.gust,
            min: measurement.wind.min,
            direction: measurement.wind.direction,
        },
        temperature: measurement.temperature,
    };
}

export async function fetchHolfuyHistory(): Promise<Array<HolfuyMeasurement>> {
    const body = new FormData();
    body.append('pw', process.env.HOLFUY_PASSWD as string);

    const results = await fetch(
        'https://api.holfuy.com/archive/?s=1464&m=JSON&su=km/h&mback=180',
        {
            method: 'POST',
            body: body,
            next: {
                revalidate: 60,
            },
        }
    );

    const parsedBody = (await results.json()) as HolfuyArchiveResponse;

    return parsedBody.measurements;
}
