import {
    faWind,
    faCameraRetro,
    faTrainTram,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import MobileForecastTabs from './MobileForecastTabs';
import { TabPanel } from '../TabPanel';
import HolfuyHistory from '../../../app/balises/components/MesuresHolfuy/HolfuyHistory';
import HolfuyResume from '../../../app/balises/components/MesuresHolfuy/HolfuyResume';
import MesuresOPGC from '../../../app/balises/components/MesuresOPGC/MesuresOPGC';
import TrainNextOneToday from '../../../app/train/components/TrainNextOneToday';
import TrainsOfTheDay from '../../../app/train/components/TrainsOfTheDay';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PageTitle from '../PageTitle';
import SportAirLink from '../../../app/balises/components/SpotAirLink';
import ParaveyronLink from '../../../app/balises/components/Paraveyron';
import TrainScheduleLink from '../../../app/train/components/TrainScheduleLink';

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
                <TabPanel value={value} index={0} className="">
                    <Head>
                        <title>Puy de dôme Parapente : Balises</title>
                    </Head>
                    <div className="pageContent">
                        <PageTitle icon={faWind}>Balises</PageTitle>
                        <h2>OPGC</h2>
                        <MesuresOPGC />
                        <h2>Holfuy PDD Nord (1464)</h2>
                        <HolfuyResume />
                        <HolfuyHistory />
                        <h2>Pour aller plus loin</h2>
                        <SportAirLink />
                        <ParaveyronLink />
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
                        {/* <BlockWebcam /> */}
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
                        <TrainScheduleLink />
                    </div>
                </TabPanel>
            </div>
        </div>
    );
};

export default AppMobile;
