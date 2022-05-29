import React from 'react';

type MeteoParapenteForecastProps = {};

const MeteoParapenteForecast: React.FC<MeteoParapenteForecastProps> = () => {
    return (
        <iframe
            src="https://meteo-parapente.com/#/45.7728,2.9625,18"
            height={700}
            width={'50%'}
            frameBorder="0"
        />
    );
};

export default MeteoParapenteForecast;
