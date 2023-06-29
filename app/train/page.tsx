import { faTrainTram } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import TrainNextOneToday from './components/TrainNextOneToday';
import TrainScheduleLink from './components/TrainScheduleLink';
import TrainsOfTheDay from './components/TrainsOfTheDay';
import AppPage from '../../components/layout/Mobile/AppPage';

type TrainPageProps = {};

const TrainPage: React.FC<TrainPageProps> = () => {
    return (
        <AppPage
            pageTitle={'Horaires Panoramiques'}
            pageIcon={faTrainTram}
            className={'train-tab-page'}
        >
            <TrainNextOneToday />
            <TrainsOfTheDay />
            <TrainScheduleLink />
        </AppPage>
    );
};

export default TrainPage;
