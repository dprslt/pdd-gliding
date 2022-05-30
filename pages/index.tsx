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
import MainTabs from '../components/layout/MainTabs';
import Script from 'next/script';
import TrainHourlySchedule from '../components/Train/TrainHourlySchedule';

const Home: NextPage = () => {
    return (
        <div className={styles.rootContainer}>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-73X7PN0C86"
                strategy="afterInteractive"
            ></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-73X7PN0C86');
                    `}
            </Script>
            <Head>
                <title>Puy de dôme Parapente</title>
            </Head>
            {/* <MainTabs /> */}
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
                <div className={styles.trainContainer}>
                    <h2>Horaires panoramique</h2>
                    <TrainHourlySchedule />
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
