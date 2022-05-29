import Image from 'next/image';
import React from 'react';

type LiveWebcamProps = {};

const LiveWebcam: React.FC<LiveWebcamProps> = () => {
    return (
        <iframe
            src={'/webcam-proxy/live'}
            className="webcam"
            allow="autoplay"
            scrolling="no"
            width={640}
            height={480}
            frameBorder="0"
            style={{ aspectRatio: 'auto 640 / 480' }}
        />
    );
};

export default LiveWebcam;
