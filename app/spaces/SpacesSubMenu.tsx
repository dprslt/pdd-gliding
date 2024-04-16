'use client';
import { Tabs, Tab } from '@mui/material';
import React from 'react';

import { useRouter } from 'next/navigation';
import tabStyles from 'styles/MobileTabs.module.scss';
import { createSubPageHook } from 'utils/RoutesUtils';

type MeteoSubMenu = {};

function a11yProps(index: number) {
    return {
        id: `spaces-tab-${index}`,
        'aria-controls': `spaces-tab-${index}`,
    };
}
export const spacesSubUrls = ['notams', 'tma', 'military', 'map', 'links'];

const useCurrentUrlIndex = createSubPageHook(spacesSubUrls);

const SpacesSubMenu: React.FC<MeteoSubMenu> = () => {
    const { push } = useRouter();
    const currentUrlValue = useCurrentUrlIndex();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        push(`/spaces/${spacesSubUrls[newValue]}`);
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
            <Tab label={'NOTAMs'} {...a11yProps(0)} />
            <Tab label={'TMA'} {...a11yProps(1)} />
            <Tab label={'Zones Militaires'} {...a11yProps(2)} />
            <Tab label={'Carte'} {...a11yProps(3)} />
            <Tab label={'Liens'} {...a11yProps(4)} />
        </Tabs>
    );
};

export default SpacesSubMenu;
