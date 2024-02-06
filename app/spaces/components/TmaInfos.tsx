import React from 'react';
import Image from 'next/image';
import mapTMA from './map-TMA.png';
import scheduleTMA from './schedule-tma.png';

import spacesStyles from '../spaces.module.scss';

const TmaInfos: React.FC = () => {
    return (
        <div className={spacesStyles['tma-infos']}>
            <h2>TMA</h2>
            <Image
                src={mapTMA}
                alt="Carte des TMA"
                sizes="100vw"
                style={{
                    width: '60%',
                    maxWidth: '100',
                    height: 'auto',
                }}
            />
            <Image
                src={scheduleTMA}
                alt="Altitudes des TMA"
                sizes="100vw"
                style={{
                    width: '95%',
                    height: 'auto',
                }}
            />
        </div>
    );
};

export default TmaInfos;
