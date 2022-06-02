import {
    faWind,
    faEarthEurope,
    faCameraRetro,
    faTrainTram,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Tabs, Tab } from '@mui/material';
import React from 'react';
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

type AppMobileProps = {};

const AppMobile: React.FC<AppMobileProps> = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="mobile-page">
            <div className="mobile-content">
                <TabPanel value={value} index={0} className="mesures-tab-page">
                    {/* <BlockMesures /> */}
                    <h1>Balises</h1>
                    <h2>OPGC</h2>
                    <MesuresOPGC />
                    <h2>Holfuy PDD Nord (1464)</h2>
                    <HolfuyResume />
                    <HolfuyHistory />
                </TabPanel>
                <TabPanel value={value} index={1} className="forecast-tab-page">
                    <MobileForecastTabs />
                </TabPanel>
                <TabPanel value={value} index={2} className="webcam-tab-page">
                    <h1>Webcam</h1>
                    <BlockWebcam />
                </TabPanel>
                <TabPanel value={value} index={3} className="train-tab-page">
                    <h1>Horaires Panoramiques</h1>
                    <TrainNextOneToday />
                    <TrainsOfTheDay />
                    <TrainHourlySchedule />
                </TabPanel>
            </div>
            <MainTabs value={value} onChange={handleChange} />
        </div>
    );
};

export default AppMobile;
