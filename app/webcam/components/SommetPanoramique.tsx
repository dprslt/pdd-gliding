'use client';

import React from 'react';
import LiveWebcamVideo from './LiveWebcamVideo';

const SommetPanoramique: React.FC = () => {
    return (
        <>
            {[1, 2, 3, 4].map((camera) => (
                <LiveWebcamVideo key={camera} camera={camera} />
            ))}
        </>
    );
};

export default SommetPanoramique;