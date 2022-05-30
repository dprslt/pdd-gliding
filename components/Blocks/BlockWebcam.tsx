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
            {/* <h2>Webcams</h2> */}
            <OrcinesWebcam />
            <SommetWebcam />
            <CezeauxWebcam />
            <MeteovergneWebcam />
            <LiveWebcam />
        </div>
    );
};

export default BlockWebcam;
