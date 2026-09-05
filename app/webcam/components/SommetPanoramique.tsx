import React from 'react';
import LiveWebcamImage from './LiveWebcamImage';

type SommetPanoramiqueProps = {};

const SommetPanoramique: React.FC<SommetPanoramiqueProps> = () => {
    const baseUrl = '/pano-proxy?scale=50&monitor=';
    const monitors = [3, 5, 4, 2];

    return (
        <>
            {monitors.map((monitor, index) => (
                <LiveWebcamImage
                    key={index}
                    monitor={monitor}
                    baseUrl={baseUrl}
                    width={1920}
                    height={1080}
                />
            ))}
        </>
    );
};

export default SommetPanoramique;
