'use client';

import dynamic from 'next/dynamic';

const PopupManager = dynamic(() => import('./PopupsManager'), {
    ssr: false,
});

import React, { Suspense } from 'react';

const ClientPopupManagerWrapper: React.FC = () => {
    return (
        <Suspense>
            <PopupManager />
        </Suspense>
    );
};
export default ClientPopupManagerWrapper;
