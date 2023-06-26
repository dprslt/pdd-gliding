'use client';

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
import MetOfficeLink from '../../links/MetOfficeUK';
import MultiModelLink from '../../links/MeteoBlueMultimodel';
import PageTitle from '../../Blocks/PageTitle';
import { redirect, usePathname, useRouter } from 'next/navigation';

type MobileForecastTabsProps = {};

function a11yProps(index: number) {
    return {
        id: `forecast-tab-${index}`,
        'aria-controls': `forecast-tab-${index}`,
    };
}
export const urls = ['meteoparapente', 'windy', 'meteoblue', 'more'];

// TODO rewrite this component and split it
const MobileForecastTabs: React.FC<MobileForecastTabsProps> = () => {
    const router = useRouter();
    const pathname = usePathname();
    const paths = pathname?.split('/');
    paths?.shift();
    console.log(paths);
    const stringValue = (Array.isArray(paths) && paths[1]) || urls[0];
    const value = urls.findIndex((v) => v === stringValue);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // TODO improve this to get current url
        console.log(newValue);
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
                <div className="pageContent">
                    <PageTitle icon={faEarthEurope}>Analyse Météo</PageTitle>
                    <h2>Pour aller plus loin</h2>
                    <MetOfficeLink />
                    <MultiModelLink />
                </div>
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
