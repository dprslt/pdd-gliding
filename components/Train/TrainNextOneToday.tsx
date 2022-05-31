import moment, { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
import { default as ReactMoment } from 'react-moment';
import { useMoment } from '../../hooks/useMoment';
import { PanoSchedule2022 } from '../../services/Train/configs/2022';
import { getNextTrainForADay } from '../../services/Train/TrainSchedules';

type TrainNextOneTodayProps = {};

const TrainNextOneToday: React.FC<TrainNextOneTodayProps> = () => {
    const nowMoment = useMoment();

    const [nextTrain, setNextTrain] = useState<Moment | null>(null);

    useEffect(() => {
        setNextTrain(getNextTrainForADay(nowMoment, PanoSchedule2022));
    }, [nowMoment]);

    return nextTrain === null ? (
        <p>Plus de train pour aujourd&apos;hui.</p>
    ) : (
        <p>
            Prochain train dans <ReactMoment fromNow date={nextTrain} /> (
            <ReactMoment date={nextTrain} format={"HH'h'mm"} />)
        </p>
    );
};

export default TrainNextOneToday;
