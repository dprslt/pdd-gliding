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
import TrainNextOneToday from '../Train/TrainNextOneToday';
import TrainsOfTheDay from '../Train/TrainsOfTheDay';

type AppDesktopProps = {};

const AppDesktop: React.FC<AppDesktopProps> = () => {
    return (
        <div className="desktop-root-container">
            <div className={'main-container'}>
                <div className={'mesure-container'}>
                    <h1>Mesures en direct</h1>
                    <BlockMesures />
                </div>

                <h1>Prévisions</h1>
                <BlockForecast />

                <div className={'train-container'}>
                    <h1>Horaires panoramique</h1>
                    <TrainNextOneToday />
                    <TrainsOfTheDay />
                    <TrainHourlySchedule />
                </div>
            </div>

            <BlockWebcam />
        </div>
    );
};

export default AppDesktop;
