'use client';

import moment, { Moment } from 'moment';
import { default as ReactMoment } from 'react-moment';
import React, { useEffect, useState } from 'react';
import { PanoSchedule2024 } from '../../../services/Train/configs/2023';
import {
    getAllTrainsOfADay,
    getNextTrainForADay,
} from '../../../services/Train/TrainSchedules';
import { useMoment } from '../../../hooks/useMoment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import trainStyle from '../train.module.scss';

type TrainsOfTheDayProps = {};

const TrainsOfTheDay: React.FC<TrainsOfTheDayProps> = () => {
    const nowMoment = useMoment();

    const [trains, setAllTrains] = useState<Array<Moment>>([]);
    const [nextTrain, setNextTrain] = useState<Moment | null>(null);

    useEffect(() => {
        try {
            setAllTrains(getAllTrainsOfADay(nowMoment, PanoSchedule2024));
            setNextTrain(getNextTrainForADay(nowMoment, PanoSchedule2024));
        } catch (e) {
            console.error(e);
        }
    }, [nowMoment]);

    const [showMissed, setShowMissed] = useState(false);

    return (
        <div className={trainStyle['train-of-day']}>
            <h2>
                Trains de la journée{' '}
                <button
                    className={
                        showMissed
                            ? trainStyle['missed-on']
                            : trainStyle['missed-off']
                    }
                    onClick={() => setShowMissed(!showMissed)}
                >
                    <FontAwesomeIcon icon={showMissed ? faEyeSlash : faEye} />{' '}
                    {showMissed
                        ? 'Masquer les trains ratés'
                        : 'Voir les trains ratés'}
                </button>
            </h2>
            {!showMissed && nextTrain === null && (
                <p>Plus de train pour aujourd&apos;hui.</p>
            )}
            <ul>
                {trains.map((train) => {
                    const isMissed = nowMoment.isAfter(train);

                    if (isMissed && !showMissed) {
                        return null;
                    }
                    return (
                        <li
                            key={train.format('HH:mm')}
                            className={
                                isMissed
                                    ? trainStyle['missed']
                                    : trainStyle['active']
                            }
                        >
                            <ReactMoment date={train} format={'HH[h]mm'} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TrainsOfTheDay;
