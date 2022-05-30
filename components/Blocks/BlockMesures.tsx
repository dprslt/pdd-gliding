import React from 'react';
import MeteoParapenteForecast from '../MeteoParapenteForecast/MeteoParapenteForecast';
import WindyForecast from '../WindyForecast/WindyForecast';
import styles from '../../styles/Home.module.scss';
import HolfuyHistory from '../MesuresHolfuy/HolfuyHistory';
import HolfuyResume from '../MesuresHolfuy/HolfuyResume';
import MesuresOPGC from '../MesuresOPGC/MesuresOPGC';

type BlockForecastProps = {};

const BlockForecast: React.FC<BlockForecastProps> = () => {
    return (
        <div className={styles.mesureContainerColumns}>
            <MesuresOPGC />
            <div>
                <HolfuyResume />
                <HolfuyHistory />
            </div>
        </div>
    );
};

export default BlockForecast;
