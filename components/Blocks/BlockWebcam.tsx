import React from 'react';
import CezeauxWebcam from '../Webcams/CezeauxWebcam';
import LiveWebcam from '../Webcams/LiveWebcam';
import MeteovergneWebcam from '../Webcams/MeteovergneWebcam';
import OrcinesWebcam from '../Webcams/OrcinesWebcam';
import SommetWebcam from '../Webcams/SommetWebcam';

import styles from '../../styles/Home.module.scss';

type BlockWebcamProps = {};

const BlockWebcam: React.FC<BlockWebcamProps> = () => {
    return (
        <div className="webcam-container">
            <h2>Vue Orcines</h2>
            <OrcinesWebcam />
            <h2>Vue Sommet Sud-Est</h2>
            <SommetWebcam />
            <h2>Vue Cézeaux</h2>
            <CezeauxWebcam />
            <h2>Météovergne</h2>
            <MeteovergneWebcam />
            <h2>Live - Sud-Ouest</h2>
            <LiveWebcam />
        </div>
    );
};

export default BlockWebcam;
