/* eslint-disable @next/next/no-img-element */
import React from 'react';

type MeteovergneWebcamProps = {};

const MeteovergneWebcam: React.FC<MeteovergneWebcamProps> = () => {
    return (
        <img
            src={'https://meteovergne.fr/stations/pdd/webcam/webcam.php'}
            alt={'Webcam Météovergne'}
            className="webcam"
            width={800}
            height={600}
        />
    );
};

export default MeteovergneWebcam;
