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
import PageTitle from '../../Blocks/PageTitle';
import SportAirLink from '../../links/SpotAirLink';
import ParaveyronLink from '../../links/Paraveyron';
import MetOfficeLink from '../../links/MetOfficeUK';

type AppMobileProps = {};

const urls = ['wind', 'meteo', 'webcam', 'train'];

const AppMobile: React.FC<AppMobileProps> = () => {
    const router = useRouter();
    const indexQuery = router.query.index;
    const stringValue = Array.isArray(indexQuery) ? indexQuery[0] : urls[0];
    const value = urls.findIndex((v) => v === stringValue);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        router.push(`/${urls[newValue]}`);
    };

    return (
        <div className="mobile-app">
            <div className="mobile-content">
                <TabPanel value={value} index={0} className="mesures-tab-page">
                    {/* <BlockMesures /> */}
                    <div className="pageContent">
                        <Head>
                            <title>Puy de dôme Parapente : Balises</title>
                        </Head>
                        <PageTitle icon={faWind}>Balises</PageTitle>
                        <h2>OPGC</h2>
                        <MesuresOPGC />
                        <h2>Holfuy PDD Nord (1464)</h2>
                        <HolfuyResume />
                        <HolfuyHistory />
                        <h2>Pour aller plus loin</h2>
                        <SportAirLink />
                        <ParaveyronLink />
                        {/* <MetOfficeLink /> */}
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
                    <div className="pageContent">
                        <PageTitle icon={faCameraRetro}>Webcams</PageTitle>
                        <BlockWebcam />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3} className="train-tab-page">
                    <Head>
                        <title>Puy de dôme Parapente : Train</title>
                    </Head>
                    <div className="pageContent">
                        <PageTitle icon={faTrainTram}>
                            Horaires Panoramiques
                        </PageTitle>

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
