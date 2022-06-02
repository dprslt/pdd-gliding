import {
    faWind,
    faEarthEurope,
    faCameraRetro,
    faTrainTram,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Tabs, Tab } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/MobileTabs.module.scss';

type MobileNavBarProps = {};

const MobileNavBar: React.FC<MobileNavBarProps> = () => {
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={0}
                // onChange={onChange}
                variant="fullWidth"
                className={styles.mobileTabs}
            >
                <Link href="/balises" passHref>
                    <Tab
                        label={<FontAwesomeIcon icon={faWind} />}
                        // {...a11yProps(0)}
                    />
                </Link>
                <Link href="/meteo" passHref>
                    <Tab
                        label={<FontAwesomeIcon icon={faEarthEurope} />}
                        // {...a11yProps(1)}
                    />
                </Link>
                <Tab
                    label={<FontAwesomeIcon icon={faCameraRetro} />}
                    // {...a11yProps(2)}
                />
                <Tab
                    label={<FontAwesomeIcon icon={faTrainTram} />}
                    // {...a11yProps(3)}
                />
            </Tabs>
        </Box>
    );
};

export default MobileNavBar;
