import React from 'react';
import HolfuyHistory from '../MesuresHolfuy/HolfuyHistory';
import HolfuyResume from '../MesuresHolfuy/HolfuyResume';
import MesuresOPGC from '../MesuresOPGC/MesuresOPGC';
import MeteoParapenteForecast from '../MeteoParapenteForecast/MeteoParapenteForecast';
import TrainHourlySchedule from '../Train/TrainHourlySchedule';
import WindyForecast from '../WindyForecast/WindyForecast';
import BlockWebcam from '../Blocks/BlockWebcam';
import styles from '../../styles/Home.module.scss';
import BlockForecast from '../Blocks/BlockForecast';
import BlockMesures from '../Blocks/BlockMesures';

type AppDesktopProps = {};

const AppDesktop: React.FC<AppDesktopProps> = () => {
    return (
        <div>
            <div className={styles.mainContainer}>
                <div className={styles.mesureContainer}>
                    <h2>Mesures en direct</h2>
                </div>
                <BlockMesures />

                <h2>Prévisions</h2>
                <BlockForecast />

                <div className={styles.trainContainer}>
                    <h2>Horaires panoramique</h2>
                    <TrainHourlySchedule />
                </div>
            </div>

            <BlockWebcam />
        </div>
    );
};

export default AppDesktop;
