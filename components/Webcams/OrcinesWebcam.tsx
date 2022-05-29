/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

type OrcinesWebcamProps = {};

const OrcinesWebcam: React.FC<OrcinesWebcamProps> = () => {
    return (
        <img
            src={'https://www.orcines.fr/webcam.jpg'}
            alt={'Webcam Orcines'}
            className="webcam"
            width={1256}
            height={706}
        />
    );
};

export default OrcinesWebcam;
