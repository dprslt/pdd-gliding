import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    idPrefix?: string;
    className?: string;
}

export function TabPanel(props: TabPanelProps) {
    const {
        children,
        value,
        index,
        idPrefix = 'simple-tab-panel',
        ...other
    } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`${idPrefix}panel-${index}`}
            aria-labelledby={`${idPrefix}-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}
