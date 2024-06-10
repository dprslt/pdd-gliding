export type GenericWindMeasurement = {
    datetime: string;
    wind: {
        speed: number;
        gust?: number;
        min?: number;
        direction: number;
    };
    temperature: number;
    humidity?: number;
    pressure?: number;
};
