'use client';
import { Tabs, Tab } from '@mui/material';
import React from 'react';

import { usePathname, useRouter } from 'next/navigation';
import tabStyles from 'styles/MobileTabs.module.scss';

type MeteoSubMenu = {};

function a11yProps(index: number) {
    return {
        id: `forecast-tab-${index}`,
        'aria-controls': `forecast-tab-${index}`,
    };
}
export const urls = ['meteoparapente', 'windy', 'wetter', 'meteoblue', 'more'];

const useCurrentUrlIndex = (): number => {
    const pathname = usePathname();
    const paths = pathname?.split('/');
    paths?.shift();
    const stringValue = (Array.isArray(paths) && paths[1]) || undefined;
    const value = urls.findIndex((v) => v === stringValue);
    return value || 0;
};

const MeteoSubMenu: React.FC<MeteoSubMenu> = () => {
    const { push } = useRouter();
    const currentUrlValue = useCurrentUrlIndex();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        push(`/meteo/${urls[newValue]}`);
    };

    return (
        <Tabs
            value={currentUrlValue}
            onChange={handleChange}
            className={tabStyles.mobileSubTabs}
            // variant="fullWidth"
            variant="scrollable"
            scrollButtons="auto"
        >
            <Tab label={'MétéoParapente'} {...a11yProps(0)} />
            <Tab label={'Windy'} {...a11yProps(1)} />
            <Tab label={'Wetter'} {...a11yProps(2)} />
            <Tab label={'Meteogram'} {...a11yProps(3)} />
            <Tab label={'Plus..'} {...a11yProps(4)} />
        </Tabs>
    );
};

export default MeteoSubMenu;
