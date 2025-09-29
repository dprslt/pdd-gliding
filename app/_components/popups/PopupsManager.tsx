'use client';

import { DateTime } from 'luxon';
import React, { useEffect } from 'react';
import CadPopup from './cad/CADPopup';
import HeholJune25Popup from './hehol-june25/HeholJune25Popup';

const PopupManager: React.FC = () => {
    const [seed, setSeed] = React.useState(0);

    const cadCounter = Number.parseInt(
        localStorage.getItem('popup-cad') || '0',
    );
    const heholCounter = Number.parseInt(
        localStorage.getItem('popup-hehol') || '0',
    );

    /*
        This way to handle the opening / closing of the popup is ugly, i should find a more elegant way
    */

    useEffect(() => {
        // localStorage.setItem('popup-cad', `${cadCounter + 1}`);
        // localStorage.setItem('popup-hehol', `${heholCounter + 1}`);
        localStorage.removeItem('popup-cad');
        localStorage.removeItem('popup-hehol');
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

    if (DateTime.now() < DateTime.fromISO('2025-06-20T00:00:00.000Z')) {
        if (heholCounter % 4 === 0) {
            return (
                <HeholJune25Popup
                    onClose={() => {
                        localStorage.setItem(
                            'popup-hehol',
                            `${heholCounter + 1}`,
                        );
                        setSeed(seed + 1);
                    }}
                />
            );
        }
    }

    return null;
};
export default PopupManager;
