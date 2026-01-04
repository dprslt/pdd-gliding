'use client';

import moment from 'moment';
import React, { useMemo } from 'react';
import { default as ReactMoment } from 'react-moment';
import { useMoment } from '../../../hooks/useMoment';
import {
    getNextTrainForADay,
    YearConfig,
} from '../../../services/Train/TrainSchedules';
import 'moment/locale/fr';

import trainStyle from '../train.module.scss';

moment.locale('fr');

type TrainNextOneTodayProps = {
    config: YearConfig;
};

const TrainNextOneToday: React.FC<TrainNextOneTodayProps> = ({ config }) => {
    const nowMoment = useMoment();

    const nextTrain = useMemo(() => {
        try {
            return getNextTrainForADay(nowMoment, config);
        } catch (e) {
            console.error(e);
            return null;
        }
    }, [nowMoment, config]);

    return (
        <div className={trainStyle['next-train']}>
            {nextTrain === null ? null : (
                <p>
                    Prochain train{' '}
                    <ReactMoment fromNow date={nextTrain} local locale="fr" /> (
                    <span></span>
                    <ReactMoment date={nextTrain} format={'HH[h]mm'} />)
                </p>
            )}
        </div>
    );
};

export default TrainNextOneToday;
