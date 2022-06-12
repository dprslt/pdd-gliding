import React from 'react';
import MeteoParapenteForecast from '../Meteo/MeteoParapenteForecast/MeteoParapenteForecast';
import WindyForecast from '../Meteo/WindyForecast/WindyForecast';
import styles from '../../styles/Home.module.scss';

type BlockForecastProps = {};

const BlockForecast: React.FC<BlockForecastProps> = () => {
    return (
        <div className={'forecast-container'}>
            <MeteoParapenteForecast />
            <WindyForecast />
        </div>
    );
};

export default BlockForecast;
