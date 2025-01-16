/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useState } from 'react';
import LiveWebcamImage from './LiveWebcamImage';

type SommetPanoramiqueProps = {};

const SommetPanoramique: React.FC<SommetPanoramiqueProps> = () => {
    const baseUrl =
        'http://77.158.167.18:8083/zm/cgi-bin/nph-zms?scale=50&monitor=';
    const monitors = [1, 2, 3, 4];

    return (
        <>
            {monitors.map((monitor, index) => (
                <LiveWebcamImage
                    key={index}
                    monitor={monitor}
                    baseUrl={baseUrl}
                    width={1920}
                    height={1080}
                />
            ))}
        </>
    );
};

export default SommetPanoramique;
