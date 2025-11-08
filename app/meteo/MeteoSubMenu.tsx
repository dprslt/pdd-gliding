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

const links = [
    { label: 'MétéoParapente', url: 'meteoparapente' },
    { label: 'Windy', url: 'windy' },
    // { label: 'Wetter', url: 'wetter' },
    { label: 'Meteogram', url: 'meteoblue' },
    { label: 'Plus..', url: 'more' },
];

export const urls = links.map((link) => link.url);

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
            {links.map((link, index) => (
                <Tab key={link.url} label={link.label} {...a11yProps(index)} />
            ))}
        </Tabs>
    );
};

export default MeteoSubMenu;
