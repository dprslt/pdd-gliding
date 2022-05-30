import React from 'react';
import MeteoParapenteForecast from '../MeteoParapenteForecast/MeteoParapenteForecast';
import WindyForecast from '../WindyForecast/WindyForecast';
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
