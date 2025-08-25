/* eslint-disable @next/next/no-img-element */
import React from 'react';

type LiveWebcamProps = {};

const LiveWebcam: React.FC<LiveWebcamProps> = () => {
    return (
        <img
            src={'/webcam-proxy/live'}
            className="webcam"
            alt="live webcam"
            width={640}
            height={480}
            style={{ aspectRatio: 'auto 640 / 480' }}
        />
    );
};

export default LiveWebcam;
