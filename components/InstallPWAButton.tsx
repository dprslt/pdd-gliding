'use client';
import React, { useEffect, useState } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import pageTitleStyle from './layout/pageTitle.module.scss';
import { mergeClasses } from 'utils/StyleHelper';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import styled from '@emotion/styled';

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#ba1829',
        color: 'white',
        fontSize: 13,
        fontWeight: 700,
    },
    [`& .${tooltipClasses.arrow}`]: {
        // color: '#ffcb1e',
        color: '#ba1829',
    },
}));

const InstallPWAButton: React.FC = () => {
    const [isTooltipOpen, setTooltipStatus] = useState<boolean | undefined>(
        true
    );

    useEffect(() => {
        setTimeout(() => {
            setTooltipStatus(false);
        }, 5000);
    }, []);

    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isInstallable, setIsInstallable] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            // e.preventDefault();
            // Stash the event so it can be triggered later
            setDeferredPrompt(e);
            setIsInstallable(true);
        };

        window.addEventListener(
            'beforeinstallprompt',
            handleBeforeInstallPrompt
        );

        return () => {
            window.removeEventListener(
                'beforeinstallprompt',
                handleBeforeInstallPrompt
            );
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        // We no longer need the prompt. Clear it up
        setDeferredPrompt(null);
        setIsInstallable(false);
    };

    if (!isInstallable) return null;

    return (
        <div
            className={mergeClasses(
                pageTitleStyle.icon,
                pageTitleStyle['icon-primary'],

                pageTitleStyle.headerElement
            )}
            id="install-pwa-button"
        >
            <CustomTooltip
                title="Installer l'application"
                arrow
                open={isTooltipOpen}
                onOpen={() => setTooltipStatus(true)}
                onClose={() => setTooltipStatus(false)}
                placement="bottom-start"
            >
                <button
                    onClick={handleInstallClick}
                    className={mergeClasses('raw-button')}
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <FontAwesomeIcon icon={faDownload} />
                </button>
            </CustomTooltip>
        </div>
    );
};

export default InstallPWAButton;
