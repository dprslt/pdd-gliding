import { DateTime } from 'luxon';
import { OPGCValues, OPGCMaxWindValues } from './apiGrafanaOPGC';

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
