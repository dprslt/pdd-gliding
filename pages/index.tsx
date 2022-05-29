import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HolfuyHistory from '../components/MesuresHolfuy/HolfuyHistory';
import HolfuyResume from '../components/MesuresHolfuy/HolfuyResume';
import MesuresOPGC from '../components/MesuresOPGC/MesuresOPGC';
import WindyForecast from '../components/WindyForecast/WindyForecast';
import MeteoParapenteForecast from '../components/MeteoParapenteForecast/MeteoParapenteForecast';
import CezeauxWebcam from '../components/Webcams/CezeauxWebcam';
import LiveWebcam from '../components/Webcams/LiveWebcam';
import MeteovergneWebcam from '../components/Webcams/MeteovergneWebcam';
import OrcinesWebcam from '../components/Webcams/OrcinesWebcam';
import SommetWebcam from '../components/Webcams/SommetWebcam';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.mesureContainer}>
                    <h2>Mesures en direct</h2>
                    <div className={styles.mesureContainerColumns}>
                        <MesuresOPGC />
                        <div>
                            <HolfuyResume />
                            <HolfuyHistory />
                        </div>
                    </div>
                </div>

                <h2>Prévisions</h2>

                <div className={styles.forecastContainer}>
                    <MeteoParapenteForecast />
                    <WindyForecast />
                </div>
            </div>
            <div className={styles.webcamsContainer}>
                <h2>Webcams</h2>
                <OrcinesWebcam />
                <SommetWebcam />
                <CezeauxWebcam />
                <MeteovergneWebcam />
                <LiveWebcam />
            </div>
        </div>
    );
};

export default Home;
