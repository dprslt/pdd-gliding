import React from 'react';
import HolfuyHistory from '../MesuresHolfuy/HolfuyHistory';
import HolfuyResume from '../MesuresHolfuy/HolfuyResume';
import MesuresOPGC from '../MesuresOPGC/MesuresOPGC';
import MeteoParapenteForecast from '../Meteo/MeteoParapenteForecast/MeteoParapenteForecast';
import WindyForecast from '../Meteo/WindyForecast/WindyForecast';
import BlockWebcam from '../Blocks/BlockWebcam';
import styles from '../../styles/Home.module.scss';
import BlockForecast from '../Blocks/BlockForecast';
import BlockMesures from '../Blocks/BlockMesures';
import TrainNextOneToday from '../Train/TrainNextOneToday';
import TrainsOfTheDay from '../Train/TrainsOfTheDay';
import TrainScheduleLink from '../Train/TrainScheduleLink';

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
                    <TrainScheduleLink />
                </div>
            </div>

            <BlockWebcam />
        </div>
    );
};

export default AppDesktop;
