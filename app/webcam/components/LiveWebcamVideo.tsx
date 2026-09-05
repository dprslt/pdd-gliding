'use client';

import React, { useEffect, useState } from 'react';

type LiveWebcamVideoProps = {
    camera: number;
};

const REFRESH_INTERVAL_MS = 3 * 60 * 1000;

const LiveWebcamVideo: React.FC<LiveWebcamVideoProps> = ({ camera }) => {
    const [cacheBuster, setCacheBuster] = useState(() => Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setCacheBuster(Date.now()),
            REFRESH_INTERVAL_MS,
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <video
            autoPlay
            muted
            playsInline
            loop
            preload="none"
            controlsList="nodownload"
            aria-label={`Webcam N°${camera} du Panoramique des Dômes`}
            className="webcam"
        >
            <source
                src={`https://www.panoramiquedesdomes.fr/wp-content/uploads/cameras/camera_${camera}/video_Webcam_${camera}.mp4?v=${cacheBuster}`}
                type="video/mp4"
            />
        </video>
    );
};

export default LiveWebcamVideo;