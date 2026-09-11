'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const GolfVolcansWebcam: React.FC = () => {
    const [timestamp] = useState(() => Date.now());

    return (
        <img
            src={`https://www.golfdesvolcans.fr/wp-content/uploads/cam/parcours_n1_golf_des_volcans.jpg?t=${timestamp}`}
            alt={'Webcam golf Volcan'}
            className="webcam"
            width={1920}
            height={720}
        />
    );
};

export default GolfVolcansWebcam;
