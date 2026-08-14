import {
    convertWindbirdArchiveToGeneric,
    convertWindbirdLiveToGeneric,
    WindbirdArchiveResponse,
    WindbirdLiveResponse,
} from '../fetchWindbird';

describe('Testing convertWindbirdLiveToGeneric', () => {
    it('should convert a live measurement to a generic one', () => {
        const liveResponse: WindbirdLiveResponse = {
            data: {
                id: 1593,
                meta: {
                    name: 'Windbird 1593',
                },
                location: {
                    latitude: 44.502391,
                    longitude: 3.307975,
                    date: '2026-08-03T20:20:52.000Z',
                    success: true,
                },
                measurements: {
                    date: '2026-08-03T20:25:52.000Z',
                    pressure: null,
                    wind_heading: 247.5,
                    wind_speed_avg: 14,
                    wind_speed_max: 21.5,
                    wind_speed_min: 6,
                },
                status: {
                    date: '2026-08-03T20:25:52.000Z',
                    snr: 21.5,
                    state: 'on',
                },
            },
        };

        const result = convertWindbirdLiveToGeneric(liveResponse);

        expect(result).toStrictEqual({
            datetime: '2026-08-03T20:25:52.000Z',
            wind: {
                speed: 14,
                gust: 21.5,
                min: 6,
                direction: 247.5,
            },
        });
    });

    it('should throw on invalid timestamp', () => {
        const liveResponse: WindbirdLiveResponse = {
            data: {
                id: 1593,
                meta: {
                    name: 'Windbird 1593',
                },
                location: {
                    latitude: 44.502391,
                    longitude: 3.307975,
                    date: null,
                    success: true,
                },
                measurements: {
                    date: 'not-a-date',
                    pressure: null,
                    wind_heading: 247.5,
                    wind_speed_avg: 14,
                    wind_speed_max: 21.5,
                    wind_speed_min: 6,
                },
                status: {
                    date: '2026-08-03T20:25:52.000Z',
                    snr: 21.5,
                    state: 'on',
                },
            },
        };

        expect(() => convertWindbirdLiveToGeneric(liveResponse)).toThrow(
            'Invalid timestamp',
        );
    });
});

describe('Testing convertWindbirdArchiveToGeneric', () => {
    const archiveResponse: WindbirdArchiveResponse = {
        legend: [
            'time',
            'latitude',
            'longitude',
            'wind_speed_min',
            'wind_speed_avg',
            'wind_speed_max',
            'wind_heading',
            'pressure',
        ],
        units: [
            'utc',
            'degrees',
            'degrees',
            'km/h',
            'km/h',
            'km/h',
            'degrees',
            '(deprecated)',
        ],
        data: [
            [
                '2026-08-03T20:15:49.000Z',
                44.502391,
                3.307975,
                14,
                21.5,
                29,
                225,
                null,
            ],
            [
                '2026-08-03T20:20:52.000Z',
                44.502391,
                3.307975,
                8,
                14,
                21.5,
                247.5,
                null,
            ],
        ],
    };

    it('should convert archive measurements to generic ones', () => {
        const result = convertWindbirdArchiveToGeneric(archiveResponse);

        expect(result).toStrictEqual([
            {
                datetime: '2026-08-03T20:15:49.000Z',
                wind: {
                    speed: 21.5,
                    gust: 29,
                    min: 14,
                    direction: 225,
                },
            },
            {
                datetime: '2026-08-03T20:20:52.000Z',
                wind: {
                    speed: 14,
                    gust: 21.5,
                    min: 8,
                    direction: 247.5,
                },
            },
        ]);
    });
});
