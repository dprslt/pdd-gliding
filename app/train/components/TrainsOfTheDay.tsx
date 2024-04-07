'use client';

import moment, { Moment } from 'moment';
import { default as ReactMoment } from 'react-moment';
import React, { useEffect, useState } from 'react';
import { PanoSchedule2024 } from '../../../services/Train/configs/2024';
import {
    getAllTrainsOfADay,
    getNextTrainForADay,
} from '../../../services/Train/TrainSchedules';
import { useMoment } from '../../../hooks/useMoment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import trainStyle from '../train.module.scss';
import { mergeClasses } from 'utils/StyleHelper';

type TrainsOfTheDayProps = {};

const TrainsOfTheDay: React.FC<TrainsOfTheDayProps> = () => {
    const nowMoment = useMoment();

    const [trains, setAllTrains] = useState<Array<Moment>>([]);
    const [nextTrain, setNextTrain] = useState<Moment | null>(null);

    const [showMissed, setShowMissed] = useState(false);
    const [nextDay, setNextDay] = useState(false);

    useEffect(() => {
        var momentToUse = nowMoment;
        if (nextDay) {
            momentToUse = nowMoment.clone().add(1, 'day').startOf('day');
        }
        try {
            setAllTrains(getAllTrainsOfADay(momentToUse, PanoSchedule2024));
            setNextTrain(getNextTrainForADay(momentToUse, PanoSchedule2024));
        } catch (e) {
            console.error(e);
        }
    }, [nowMoment, nextDay]);

    return (
        <div className={trainStyle['train-of-day']}>
            <div className={trainStyle['train-header']}>
                <h2>Horaire des montées</h2>
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
            </div>

            <div className={trainStyle['next-day-scedule-buttons']}>
                <button
                    className={mergeClasses(
                        nextDay ? '' : trainStyle['scedule-button--active'],
                        trainStyle['next-day-scedule-button']
                    )}
                    onClick={() => setNextDay(false)}
                >
                    Aujourd&apos;hui
                </button>
                <button
                    className={mergeClasses(
                        nextDay ? trainStyle['scedule-button--active'] : '',
                        trainStyle['next-day-scedule-button']
                    )}
                    onClick={() => setNextDay(true)}
                >
                    Demain
                </button>
            </div>

            {!showMissed &&
                nextTrain === null &&
                (nextDay ? (
                    <p>Pas de trains demain</p>
                ) : (
                    <p>Plus de trains pour aujourd&apos;hui.</p>
                ))}
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
