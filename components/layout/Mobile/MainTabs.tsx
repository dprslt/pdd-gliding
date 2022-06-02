import {
    faWind,
    faEarthEurope,
    faCameraRetro,
    faTrainTram,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Tabs, Tab } from '@mui/material';
import React from 'react';

import styles from '../../../styles/MobileTabs.module.scss';

type MainTabsProps = {
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
};

function a11yProps(index: number) {
    return {
        id: `mobile-tab-${index}`,
        'aria-controls': `mobile-tab-${index}`,
    };
}

const MainTabs: React.FC<MainTabsProps> = ({ value, onChange }) => {
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={value}
                onChange={onChange}
                variant="fullWidth"
                className={styles.mobileTabs}
            >
                <Tab
                    label={<FontAwesomeIcon icon={faWind} />}
                    {...a11yProps(0)}
                />
                <Tab
                    label={<FontAwesomeIcon icon={faEarthEurope} />}
                    {...a11yProps(1)}
                />
                <Tab
                    label={<FontAwesomeIcon icon={faCameraRetro} />}
                    {...a11yProps(2)}
                />
                <Tab
                    label={<FontAwesomeIcon icon={faTrainTram} />}
                    {...a11yProps(3)}
                />
            </Tabs>
        </Box>
    );
};

export default MainTabs;
