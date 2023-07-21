import { faTrainTram } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import TrainNextOneToday from './components/TrainNextOneToday';
import TrainScheduleLink from './components/TrainScheduleLink';
import TrainsOfTheDay from './components/TrainsOfTheDay';
import AppPage from '../../components/layout/AppPage';

import trainStyle from './train.module.scss';

const TrainPage: React.FC = () => {
    return (
        <AppPage
            pageTitle={'Horaires Panoramiques'}
            pageIcon={faTrainTram}
            className={trainStyle['train-tab-page']}
        >
            <TrainNextOneToday />
            <TrainsOfTheDay />
            <TrainScheduleLink />
        </AppPage>
    );
};

export default TrainPage;
