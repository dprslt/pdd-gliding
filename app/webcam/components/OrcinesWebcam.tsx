/* eslint-disable @next/next/no-img-element */
import React from 'react';

type OrcinesWebcamProps = {};

const OrcinesWebcam: React.FC<OrcinesWebcamProps> = () => {
    return (
        <img
            src={`https://www.orcines.fr/wp-content/uploads/webcam/webcam.jpg?t=${Date.now()}`}
            alt={'Webcam Orcines'}
            className="webcam"
            width={1256}
            height={706}
        />
    );
};

export default OrcinesWebcam;
