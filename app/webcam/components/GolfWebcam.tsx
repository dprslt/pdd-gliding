'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const GolfVolcansWebcam: React.FC = () => {
    return (
        <img
            src={`https://www.golfdesvolcans.fr/wp-content/uploads/cam/parcours_n1_golf_des_volcans.jpg?t=${Date.now()}`}
            alt={'Webcam golf Volcan'}
            className="webcam"
            width={1920}
            height={720}
        />
    );
};

export default GolfVolcansWebcam;
