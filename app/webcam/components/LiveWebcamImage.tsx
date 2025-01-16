'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

type LiveWebcamImageProps = {
    monitor: number;
    baseUrl: string;
    width: number;
    height: number;
};

const LiveWebcamImage: React.FC<LiveWebcamImageProps> = ({
    monitor,
    baseUrl,
    width,
    height,
}) => {
    const [mode, setMode] = useState('single');

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'single' ? 'jpeg' : 'single'));
    };

    return (
        <div
            style={{
                position: 'relative',
                display: 'block',
                cursor: 'pointer',
            }}
        >
            <img
                src={`${baseUrl}${monitor}&mode=${mode}`}
                alt={`Webcam ${monitor}`}
                className="webcam"
                width={width}
                height={height}
                onClick={toggleMode}
            />
            {mode === 'single' && (
                <div
                    onClick={toggleMode}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        width: '2em',
                        height: '2em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        borderRadius: '50%',
                        paddingLeft: '0.25em',
                    }}
                >
                    ▶
                </div>
            )}
        </div>
    );
};

export default LiveWebcamImage;
