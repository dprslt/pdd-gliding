import React, { useEffect } from 'react';

type PWAHeadProps = {};

const PWAHead: React.FC<PWAHeadProps> = () => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js').then(
                    function (registration) {
                        console.log(
                            'Service Worker registration successful with scope: ',
                            registration.scope
                        );
                    },
                    function (err) {
                        console.log(
                            'Service Worker registration failed: ',
                            err
                        );
                    }
                );
            });
        }
    }, []);
    return (
        <>
            <link href="touch-icon-iphone.png" rel="apple-touch-icon" />
            <link
                href="/icone-pdd-32_x_32.png"
                rel="apple-touch-icon"
                sizes="32x32"
            />
            <link
                href="/icone-pdd-128_x_128.png"
                rel="apple-touch-icon"
                sizes="128x128"
            />
            <link
                href="/icone-pdd-512_x_512.png"
                rel="apple-touch-icon"
                sizes="512x512"
            />
            <link rel="manifest" href="/dprslt-pdd.webmanifest" />
        </>
    );
};

export default PWAHead;
