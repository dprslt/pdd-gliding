'use client';

import {
    faWind,
    faCameraRetro,
    faTrainTram,
    faPlaneCircleCheck,
    faCloudSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Tabs, Tab } from '@mui/material';
import { Router } from 'next/router';
import React from 'react';

import styles from '../../styles/MobileTabs.module.scss';
import ActiveLink from './ActiveLink';

type MainTabsProps = {};

const MainMenu: React.FC<MainTabsProps> = () => {
    return (
        <Box
            sx={{ borderBottom: 1, borderColor: 'divider' }}
            className={styles.mobileTabsBox}
        >
            <div className={styles.mobileTabs}>
                <ActiveLink href={'/balises'}>
                    <FontAwesomeIcon icon={faWind} />
                </ActiveLink>
                <ActiveLink href={'/meteo'}>
                    <FontAwesomeIcon icon={faCloudSun} />
                </ActiveLink>
                <ActiveLink href={'/webcam'}>
                    <FontAwesomeIcon icon={faCameraRetro} />
                </ActiveLink>
                <ActiveLink href={'/train'}>
                    <FontAwesomeIcon icon={faTrainTram} />
                </ActiveLink>
                <ActiveLink href={'/spaces'}>
                    <FontAwesomeIcon icon={faPlaneCircleCheck} />
                </ActiveLink>
            </div>
        </Box>
    );
};

export default MainMenu;
