import moment, { Moment } from 'moment';

moment.locale('fr');

export type DayType =
    | 'HourlyFiveDays'
    | 'Hourly'
    | 'Fourty'
    | 'Twenty'
    | 'TwentyExtended'
    | 'Closed';

type Period = {
    from: Moment;
    to: Moment;
    status: DayType;
};

type YearConfig = {
    periods: Array<Period>;
};

// export const computeNextTrainForDayType = (dayType: DayType): Moment => {};

export const foundCurrentPeriod = (
    time: Moment,
    periods: Array<Period>
): Period => {
    for (let period of periods) {
        if (time.isSameOrAfter(period.from) && time.isBefore(period.to)) {
            return period;
        }
    }
    throw new Error('No period cover : ' + time.format());
};

export const getDayTypeForADay = (
    time: Moment,
    config: YearConfig
): DayType => {
    const dayOfYear = time.dayOfYear();
    const dayOfWeek = time.weekday();

    if (time.format('DD/MM') === '25/12') {
        return 'Closed';
    }

    const period = foundCurrentPeriod(time, config.periods);

    if (period.status === 'HourlyFiveDays') {
        // Closed on Monday and Thuesday
        if (time.weekday() === 0 || time.weekday() === 1) {
            return 'Closed';
        }
    }

    return period.status;
};

export const getNextTrainForADay = (
    day: Moment,
    config: YearConfig
): Moment | null => {
    const type = getDayTypeForADay(day, config);

    if (type === 'Closed') {
    }

    // Exit cases, if we're after the last train
    switch (type) {
        case 'Hourly':
        case 'HourlyFiveDays':
            if (day.isAfter(moment(day).hour(17).minute(0).second(0))) {
                return null;
            }
            break;
        case 'Fourty':
            if (day.isAfter(moment(day).hour(19).minute(0).second(0))) {
                return null;
            }
            break;
        case 'Twenty':
        case 'TwentyExtended':
            if (day.isAfter(moment(day).hour(20).minute(0).second(0))) {
                return null;
            }
            break;
        // case Closed
        default:
            return null;
    }

    const clonedDay = moment(day).hour(9).minutes(0).seconds(0);
    if (type === 'Hourly' || type === 'HourlyFiveDays') {
        clonedDay.hour(10);
    }

    while (clonedDay.isBefore(day)) {
        if (clonedDay.isAfter(day.endOf('day'))) {
            throw new Error('Something went wrong');
        }

        switch (type) {
            case 'Hourly':
            case 'HourlyFiveDays':
                clonedDay.add(1, 'hour');
            case 'Fourty':
                clonedDay.add(40, 'minutes');
            case 'Twenty':
            case 'TwentyExtended':
                clonedDay.add(20, 'minutes');
            // Should never occur but do not want to freeze the loop
            default:
                clonedDay.add(12, 'hour');
        }
    }
    return clonedDay;
};

export const Schedule2022: YearConfig = {
    periods: [
        {
            from: moment('01/01/2022', 'L').startOf('day'),
            to: moment('13/02/2022', 'L').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('14/02/2022', 'L').startOf('day'),
            to: moment('27/02/2022', 'L').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('28/02/2022', 'L').startOf('day'),
            to: moment('20/03/2022', 'L').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('21/03/2022', 'L').startOf('day'),
            to: moment('25/03/2022', 'L').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('26/03/2022', 'L').startOf('day'),
            to: moment('30/06/2022', 'L').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('01/07/2022', 'L').startOf('day'),
            to: moment('17/07/2022', 'L').endOf('day'),
            status: 'Twenty',
        },
        {
            from: moment('18/07/2022', 'L').startOf('day'),
            to: moment('12/08/2022', 'L').endOf('day'),
            status: 'TwentyExtended',
        },
        {
            from: moment('12/08/2022', 'L').startOf('day'),
            to: moment('31/08/2022', 'L').endOf('day'),
            status: 'Twenty',
        },
        {
            from: moment('01/09/2022', 'L').startOf('day'),
            to: moment('06/11/2022', 'L').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('07/11/2022', 'L').startOf('day'),
            to: moment('13/11/2022', 'L').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('14/11/2022', 'L').startOf('day'),
            to: moment('18/11/2022', 'L').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('19/11/2022', 'L').startOf('day'),
            to: moment('13/12/2022', 'L').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('14/11/2022', 'L').startOf('day'),
            to: moment('31/12/2022', 'L').endOf('day'),
            status: 'Hourly',
        },
    ],
};
