import { faWind, faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs, Tab } from '@mui/material';
import React, { useEffect } from 'react';
import { TabPanel } from '../TabPanel';
import MeteoParapenteForecast from '../../Meteo/MeteoParapenteForecast/MeteoParapenteForecast';
import WindyForecast from '../../Meteo/WindyForecast/WindyForecast';

import tabStyles from '../../../styles/MobileTabs.module.scss';
import MeteoBlueMeteoGram from '../../Meteo/MeteoBlueForecasts/MeteoblueMeteogram';
import MeteoblueMultimodel from '../../Meteo/MeteoBlueForecasts/MeteoblueMultimodel';
import { useRouter } from 'next/router';
import MetOfficeLink from '../../links/MetOfficeUK';
import MultiModelLink from '../../links/MeteoBlueMultimodel';

type MobileForecastTabsProps = {};

function a11yProps(index: number) {
    return {
        id: `forecast-tab-${index}`,
        'aria-controls': `forecast-tab-${index}`,
    };
}

const urls = ['meteoparapente', 'windy', 'meteoblue', 'more'];

const MobileForecastTabs: React.FC<MobileForecastTabsProps> = () => {
    const router = useRouter();
    const indexQuery = router.query.index;
    const stringValue = (Array.isArray(indexQuery) && indexQuery[1]) || urls[0];
    const value = urls.findIndex((v) => v === stringValue);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // setValue(newValue);
        // TODO improve this to get current url
        router.push(`/meteo/${urls[newValue]}`);
    };

    return (
        <>
            <TabPanel value={value} index={0} className="forecast-subtab">
                <MeteoParapenteForecast />
            </TabPanel>

            <TabPanel value={value} index={1} className="forecast-subtab">
                <WindyForecast />
            </TabPanel>

            <TabPanel value={value} index={2} className="forecast-subtab">
                <MeteoBlueMeteoGram />
            </TabPanel>
            <TabPanel
                value={value}
                index={3}
                className="forecast-subtab forecast-morelinks"
            >
                {/* <MeteoblueMultimodel /> */}
                <h2>Pour aller plus loin</h2>
                <MetOfficeLink />
                <MultiModelLink />
            </TabPanel>
            <Tabs
                value={value}
                onChange={handleChange}
                className={tabStyles.mobileForecastTabs}
                // variant="fullWidth"
                variant="scrollable"
                scrollButtons="auto"
            >
                <Tab label={'MétéoParapente'} {...a11yProps(0)} />
                <Tab label={'Windy'} {...a11yProps(1)} />
                <Tab label={'Meteogram'} {...a11yProps(2)} />
                <Tab label={'Plus..'} {...a11yProps(3)} />
            </Tabs>
        </>
    );
};

export default MobileForecastTabs;
