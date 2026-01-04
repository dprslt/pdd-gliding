import React from 'react';
import TrainScheduleLink from './components/TrainScheduleLink';
import AppPage from '../../components/layout/AppPage';

import trainStyle from './train.module.scss';
import TrainScheduleManager from './components/TrainScheduleManager';

export const metadata = {
    title: 'Puy de dôme Parapente : Panoramique',
};

const TrainPage: React.FC = () => {
    return (
        <AppPage
            pageTitle={'Horaires Panoramiques'}
            className={trainStyle['train-tab-page']}
        >
            <TrainScheduleManager />
            <TrainScheduleLink />
        </AppPage>
    );
};

export default TrainPage;
