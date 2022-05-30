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
                    <BlockMesures />
                </TabPanel>
                <TabPanel value={value} index={1} className="forecast-tab-page">
                    {/* <BlockForecast /> */}
                    <MobileForecastTabs />
                </TabPanel>
                <TabPanel value={value} index={2} className="webcam-tab-page">
                    <BlockWebcam />
                </TabPanel>
                <TabPanel value={value} index={3} className="train-tab-page">
                    <TrainHourlySchedule />
                </TabPanel>
            </div>
            <MainTabs value={value} onChange={handleChange} />
        </div>
    );
};

export default AppMobile;
