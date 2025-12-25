'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';

type CezeauxWebcamProps = {};

const CezeauxWebcam: React.FC<CezeauxWebcamProps> = () => {
    return (
        <img
            src={'https://wwwobs.univ-bpclermont.fr/opgc/webcamcez.jpg'}
            alt={'Webcam Cézeaux'}
            className="webcam"
            width={800}
            height={600}
        />
    );
};

export default CezeauxWebcam;
