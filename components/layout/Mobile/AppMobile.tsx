import {
    faWind,
    faEarthEurope,
    faCameraRetro,
    faTrainTram,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Tabs, Tab } from '@mui/material';
import React, { useEffect } from 'react';
import BlockForecast from '../../Blocks/BlockForecast';
import BlockMesures from '../../Blocks/BlockMesures';
import BlockWebcam from '../../Blocks/BlockWebcam';
import MobileForecastTabs from './MobileForecastTabs';
import TrainHourlySchedule from '../../Train/TrainHourlySchedule';
import { TabPanel } from '../TabPanel';
import MainTabs from './MainTabs';
import HolfuyHistory from '../../MesuresHolfuy/HolfuyHistory';
import HolfuyResume from '../../MesuresHolfuy/HolfuyResume';
import MesuresOPGC from '../../MesuresOPGC/MesuresOPGC';
import TrainNextOneToday from '../../Train/TrainNextOneToday';
import TrainsOfTheDay from '../../Train/TrainsOfTheDay';
import { useRouter } from 'next/router';
import Head from 'next/head';

type AppMobileProps = {};

const urls = ['wind', 'meteo', 'webcam', 'train'];

const AppMobile: React.FC<AppMobileProps> = () => {
    const router = useRouter();
    const indexQuery = router.query.index;
    const stringValue = Array.isArray(indexQuery) ? indexQuery[0] : urls[0];
    const value = urls.findIndex((v) => v === stringValue);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // setValue(newValue);
        router.push(`/${urls[newValue]}`);
    };

    return (
        <div className="mobile-page">
            TEST UPDATE
            <div className="mobile-content">
                <TabPanel value={value} index={0} className="mesures-tab-page">
                    {/* <BlockMesures /> */}
                    <h1>Balises</h1>
                    <div className="pageContent">
                        <h2>OPGC</h2>
                        <MesuresOPGC />
                        <h2>Holfuy PDD Nord (1464)</h2>
                        <HolfuyResume />
                        <HolfuyHistory />
                        <Head>
                            <title>Puy de dôme Parapente : Balises</title>
                        </Head>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} className="forecast-tab-page">
                    <Head>
                        <title>Puy de dôme Parapente : Météo</title>
                    </Head>

                    <MobileForecastTabs />
                </TabPanel>
                <TabPanel value={value} index={2} className="webcam-tab-page">
                    <Head>
                        <title>Puy de dôme Parapente : Webcams</title>
                    </Head>
                    <h1>Webcam</h1>
                    <div className="pageContent">
                        <BlockWebcam />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3} className="train-tab-page">
                    <Head>
                        <title>Puy de dôme Parapente : Train</title>
                    </Head>
                    <h1>Horaires Panoramiques</h1>
                    <div className="pageContent">
                        <TrainNextOneToday />
                        <TrainsOfTheDay />
                        <TrainHourlySchedule />
                    </div>
                </TabPanel>
            </div>
            <MainTabs value={value} onChange={handleChange} />
        </div>
    );
};

export default AppMobile;
