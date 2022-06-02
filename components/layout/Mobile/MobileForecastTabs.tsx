import { faWind, faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs, Tab } from '@mui/material';
import React from 'react';
import { TabPanel } from '../TabPanel';
import MeteoParapenteForecast from '../../MeteoParapenteForecast/MeteoParapenteForecast';
import WindyForecast from '../../WindyForecast/WindyForecast';

import tabStyles from '../../../styles/MobileTabs.module.scss';

type MobileForecastTabsProps = {};

function a11yProps(index: number) {
    return {
        id: `forecast-tab-${index}`,
        'aria-controls': `forecast-tab-${index}`,
    };
}

const MobileForecastTabs: React.FC<MobileForecastTabsProps> = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <TabPanel value={value} index={0} className="forecast-subtab">
                <MeteoParapenteForecast />
            </TabPanel>

            <TabPanel value={value} index={1} className="forecast-subtab">
                <WindyForecast />
            </TabPanel>
            <Tabs
                value={value}
                onChange={handleChange}
                className={tabStyles.mobileForecastTabs}
                variant="fullWidth"
            >
                <Tab label={'MétéoParapente'} {...a11yProps(0)} />
                <Tab label={'Windy'} {...a11yProps(1)} />
            </Tabs>
        </>
    );
};

export default MobileForecastTabs;
