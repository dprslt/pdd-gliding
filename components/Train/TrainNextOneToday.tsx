import moment, { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
import { default as ReactMoment } from 'react-moment';
import { useMoment } from '../../hooks/useMoment';
import { getNextTrainForADay } from '../../services/Train/TrainSchedules';
import 'moment/locale/fr';
import { PanoSchedule2023 } from '../../services/Train/configs/2023';

moment.locale('fr');

type TrainNextOneTodayProps = {};

const TrainNextOneToday: React.FC<TrainNextOneTodayProps> = () => {
    const nowMoment = useMoment();

    const [nextTrain, setNextTrain] = useState<Moment | null>(null);

    useEffect(() => {
        try {
            setNextTrain(getNextTrainForADay(nowMoment, PanoSchedule2023));
        } catch (e) {
            console.error(e);
        }
    }, [nowMoment]);

    return (
        <div className="next-train">
            {nextTrain === null ? (
                <p>Plus de train pour aujourd&apos;hui.</p>
            ) : (
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
