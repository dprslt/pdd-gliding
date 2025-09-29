'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

import pageTitleStyle from './layout/pageTitle.module.scss';
import { mergeClasses } from 'utils/StyleHelper';

const RefreshButton: React.FC = () => {
    const [isPWA, setIsPWA] = useState(false);

    useEffect(() => {
        const checkPWA = () => {
            const isStandalone = window.matchMedia(
                '(display-mode: standalone)',
            ).matches;
            setIsPWA(isStandalone);
        };

        checkPWA();
        window
            .matchMedia('(display-mode: standalone)')
            .addEventListener('change', checkPWA);

        return () => {
            window
                .matchMedia('(display-mode: standalone)')
                .removeEventListener('change', checkPWA);
        };
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    if (!isPWA) {
        return null;
    }

    return (
        <button
            onClick={handleRefresh}
            className={mergeClasses(pageTitleStyle.icon, 'raw-button')}
        >
            <FontAwesomeIcon icon={faRefresh} />
        </button>
    );
};

export default RefreshButton;
