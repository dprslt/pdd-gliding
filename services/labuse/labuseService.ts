// https://api.labuse.uiguig.ovh/v1/docs

import { GraphData } from 'services/opgc/apiGrafanaOPGC';
import { GenericWindMeasurement } from 'services/wind/GenericWindMeasurement';

type LabuseMeasurement = {
    id: number;
    device_id: number;
    timestamp: string;
    wind_speed_avg: number;
    wind_speed_min: number;
    wind_speed_max: number;
    wind_heading_avg: number;
    wind_heading_min: number;
    wind_heading_max: number;
    gps_lat: number;
    gps_lon: number;
    temperature: number;
    humidity: number;
    pressure: number;
    bat_mv: number;
    solar_mv: number;
    power_mode: string;
    net_type: string;
    net_signal: number;
};

type LabuseMeasurements = Array<LabuseMeasurement>;

type LabuseGenericWindMeasurement = {
    liveData: GenericWindMeasurement | null;
    history: {
        windSpeed: GraphData;
        windOrientation: GraphData;
    };
};

export const fetchLabuseMeasurements =
    async (): Promise<LabuseMeasurements> => {
        const params = new URLSearchParams({
            deviceId: '2',
        });

        const results = await fetch(
            'https://api.labuse.uiguig.ovh/v1/measurements?' +
                params.toString(),
            {
                method: 'GET',
                next: {
                    revalidate: 60 * 5,
                },
            }
        );

        return results.json();
    };

export const getLabuseLiveData = async (
    labuseMeasurement: LabuseMeasurements
): Promise<GenericWindMeasurement | null> => {
    const firstMeasurement = labuseMeasurement[0];

    if (!firstMeasurement) {
        return null;
    }

    return {
        datetime: firstMeasurement.timestamp,
        wind: {
            speed: firstMeasurement.wind_speed_avg,
            gust: firstMeasurement.wind_speed_max,
            min: firstMeasurement.wind_speed_min,
            direction: firstMeasurement.wind_heading_avg,
        },
        temperature: firstMeasurement.temperature,
        humidity: firstMeasurement.humidity,
        pressure: firstMeasurement.pressure,
    };
};

export const getLabuseHistoricalData = async (
    labuseMeasurement: LabuseMeasurements
): Promise<LabuseGenericWindMeasurement['history']> => {
    const filteredMeasurements = labuseMeasurement.filter((measurement) => {
        const measurementTime = new Date(measurement.timestamp);
        const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000);
        return measurementTime >= threeHoursAgo;
    });

    return {
        windSpeed: {
            id: 'Labuse',
            data: filteredMeasurements.map((measurement) => ({
                x: measurement.timestamp,
                y: measurement.wind_speed_avg,
            })),
        },
        windOrientation: {
            id: 'Labuse',
            data: filteredMeasurements.map((measurement) => ({
                x: measurement.timestamp,
                y: measurement.wind_heading_avg,
            })),
        },
    };
};

export const getLabuseData =
    async (): Promise<LabuseGenericWindMeasurement> => {
        const labuseMeasurements = await fetchLabuseMeasurements();

        if (!labuseMeasurements || labuseMeasurements.length === 0) {
            throw new Error('No measurements available');
        }

        const liveData = await getLabuseLiveData(labuseMeasurements);
        const history = await getLabuseHistoricalData(labuseMeasurements);

        console.log(history.windSpeed);
        console.log(history.windOrientation);

        return {
            liveData,
            history,
        };
    };
