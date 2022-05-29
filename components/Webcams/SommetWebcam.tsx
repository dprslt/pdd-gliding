/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

type SommetWebcamProps = {};

const SommetWebcam: React.FC<SommetWebcamProps> = () => {
    return (
        <img
            src={'http://wwwobs.univ-bpclermont.fr/opgc/webcampdd.jpg'}
            alt={'Webcam Sommet'}
            className="webcam"
            width={800}
            height={600}
        />
    );
};

export default SommetWebcam;
