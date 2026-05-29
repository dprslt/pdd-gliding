/* eslint-disable @next/next/no-img-element */
import React from 'react';

type LiveWebcamProps = {};

const LiveWebcam: React.FC<LiveWebcamProps> = () => {
    const liveWebcamUrl = process.env.NEXT_PUBLIC_LIVE_WEBCAM_URL;

    if (!liveWebcamUrl) {
        return null;
    }

    return (
        <img
            src={liveWebcamUrl}
            className="webcam"
            alt="live webcam"
            width={640}
            height={480}
            style={{ aspectRatio: 'auto 640 / 480' }}
        />
    );
};

export default LiveWebcam;
