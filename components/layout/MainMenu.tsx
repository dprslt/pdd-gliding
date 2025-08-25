'use client';

import {
    faWind,
    faCameraRetro,
    faTrainTram,
    faPlaneCircleCheck,
    faCloudSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/material';
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
                <ActiveLink
                    href={'/balises'}
                    emptyPathMeanActive
                    ariaLabel="Balises"
                >
                    <FontAwesomeIcon icon={faWind} />
                </ActiveLink>
                <ActiveLink href={'/meteo'} ariaLabel="Météo">
                    <FontAwesomeIcon icon={faCloudSun} />
                </ActiveLink>
                <ActiveLink href={'/webcam'} ariaLabel="Webcams">
                    <FontAwesomeIcon icon={faCameraRetro} />
                </ActiveLink>
                <ActiveLink href={'/train'} ariaLabel="Horaires du Panoramique">
                    <FontAwesomeIcon icon={faTrainTram} />
                </ActiveLink>
                <ActiveLink
                    href={'/spaces'}
                    ariaLabel="Réglementation aérienne"
                >
                    <FontAwesomeIcon icon={faPlaneCircleCheck} />
                </ActiveLink>
            </div>
        </Box>
    );
};

export default MainMenu;
