/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

type GolfVolvicWebcamProps = {};

const GolfVolvicWebcam: React.FC<GolfVolvicWebcamProps> = () => {
    return (
        <img
            src={`https://www.golfdesvolcans.fr/wp-content/uploads/cam/parcours_n1_golf_des_volcans.jpg?t=${Date.now()}`}
            alt={'Webcam golf Volvic'}
            className="webcam"
            width={1920}
            height={720}
        />
    );
};

export default GolfVolvicWebcam;
