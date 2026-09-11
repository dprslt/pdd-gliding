'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

type OrcinesWebcamProps = {};

const OrcinesWebcam: React.FC<OrcinesWebcamProps> = () => {
    const [timestamp] = useState(() => Date.now());

    return (
        <img
            src={`https://www.orcines.fr/wp-content/uploads/webcam/webcam.jpg?t=${timestamp}`}
            alt={'Webcam Orcines'}
            className="webcam"
            width={1256}
            height={706}
        />
    );
};

export default OrcinesWebcam;
