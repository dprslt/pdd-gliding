'use client';

import React, { useEffect } from 'react';

type serviceWorkerProps = {};

const ServiceWorker: React.FC<serviceWorkerProps> = () => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js').then(
                    function (registration) {
                        console.log(
                            'Service Worker registration successful with scope: ',
                            registration.scope,
                        );
                    },
                    function (err) {
                        console.log(
                            'Service Worker registration failed: ',
                            err,
                        );
                    },
                );
            });
        }
    }, []);
    return null;
};

export default ServiceWorker;
