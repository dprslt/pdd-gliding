'use client';

import { DateTime } from 'luxon';
import React, { useEffect } from 'react';
import CadPopup from './cad/CADPopup';

const PopupManager: React.FC = () => {
    const [seed, setSeed] = React.useState(0);

    const cadCounter = Number.parseInt(
        localStorage.getItem('popup-cad') || '0'
    );

    useEffect(() => {
        localStorage.setItem('popup-cad', `${cadCounter + 1}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (typeof window === undefined) {
        return;
    }

    if (DateTime.now() < DateTime.fromISO('2025-02-09T00:00:00.000Z')) {
        if (cadCounter % 3 === 0) {
            return (
                <CadPopup
                    onClose={() => {
                        localStorage.setItem('popup-cad', `${cadCounter + 1}`);
                        setSeed(seed + 1);
                    }}
                />
            );
        }
    }

    return null;
};
export default PopupManager;
