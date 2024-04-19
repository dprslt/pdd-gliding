'use client';

import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import buttonStyle from './supportPageHeaderLink.module.scss';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: '#ffcb1e',
        backgroundColor: '#ba1829',
        color: 'white',
        // color: 'rgba(0, 0, 0, 0.57)',
        // boxShadow: theme.shadows[1],
        fontSize: 13,
        fontWeight: 700,
    },
    [`& .${tooltipClasses.arrow}`]: {
        // color: '#ffcb1e',
        color: '#ba1829',
    },
}));

const SupportPageHeaderLink: React.FC = () => {
    const [isTooltipOpen, setTooltipStatus] = useState<boolean | undefined>(
        true
    );
    useEffect(() => {
        setTimeout(() => {
            setTooltipStatus(false);
        }, 5000);
    }, []);

    return (
        <>
            <CustomTooltip
                title="Soutenez moi !"
                arrow
                open={isTooltipOpen}
                onOpen={() => setTooltipStatus(true)}
                onClose={() => setTooltipStatus(false)}
                placement="bottom-start"
            >
                <Link
                    href="/support"
                    className={buttonStyle.supportHeaderLink}
                    id="support-header-button"
                >
                    <FontAwesomeIcon icon={faBeerMugEmpty} />
                </Link>
            </CustomTooltip>
        </>
    );
};

export default SupportPageHeaderLink;
