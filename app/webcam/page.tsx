import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import CezeauxWebcam from './components/CezeauxWebcam';
import GolfVolvicWebcam from './components/GolfWebcam';
import LiveWebcam from './components/LiveWebcam';
import MeteovergneWebcam from './components/MeteovergneWebcam';
import OrcinesWebcam from './components/OrcinesWebcam';
import SommetWebcam from './components/SommetWebcam';
import AppPage from '../../components/layout/AppPage';

import webcamPageModule from './webcam.module.scss';

type WebcamsPageProps = {};

export const metadata = {
    title: 'Puy de dôme Parapente : Webcams',
};

const WebcamsPage: React.FC<WebcamsPageProps> = () => {
    return (
        <AppPage
            pageTitle={'Webcams'}
            className={webcamPageModule['webcam-tab-page']}
        >
            <div>
                <h2>Vue Orcines</h2>
                <OrcinesWebcam />
                <h2>Vue Sommet Sud-Est</h2>
                <SommetWebcam />
                <h2>Vue Cézeaux</h2>
                <CezeauxWebcam />
                <h2>Golf Volvic</h2>
                <GolfVolvicWebcam />
                {/* <h2>Live - Sud-Ouest</h2>
            <LiveWebcam /> */}
            </div>
        </AppPage>
    );
};

export default WebcamsPage;
