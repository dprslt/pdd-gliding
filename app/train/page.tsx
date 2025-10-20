import React from 'react';
import TrainNextOneToday from './components/TrainNextOneToday';
import TrainScheduleLink from './components/TrainScheduleLink';
import TrainsOfTheDay from './components/TrainsOfTheDay';
import AppPage from '../../components/layout/AppPage';

import trainStyle from './train.module.scss';

export const metadata = {
    title: 'Puy de dôme Parapente : Panoramique',
};

const TrainPage: React.FC = () => {
    return (
        <AppPage
            pageTitle={'Horaires Panoramiques'}
            className={trainStyle['train-tab-page']}
        >
            <TrainNextOneToday />
            <TrainsOfTheDay />
            <TrainScheduleLink />
        </AppPage>
    );
};

export default TrainPage;
