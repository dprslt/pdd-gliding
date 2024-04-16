import React from 'react';
import Image from 'next/image';

import centreImgCut from './zones-centre.png';
import spacesStyles from '../spaces.module.scss';

const ZoneCentreCut: React.FC = () => {
    return (
        <div className={spacesStyles['mili-area-infos']}>
            <h2>Vue en coupe Zone Centre</h2>
            <Image
                src={centreImgCut}
                alt="Vue en coupe Zone Centre"
                priority
                sizes="100vw"
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    height: 'auto',
                }}
            />
        </div>
    );
};

export default ZoneCentreCut;
