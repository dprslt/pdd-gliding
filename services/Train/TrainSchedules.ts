import moment, { Moment } from 'moment';

moment.locale('fr');

export type DayType =
    | 'HourlyFiveDays'
    | 'Hourly'
    | 'Fourty'
    | 'Twenty'
    | 'TwentyExtended'
    | 'Closed';

export type Period = {
    from: Moment;
    to: Moment;
    status: DayType;
};

export type YearConfig = {
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

export const getDayTypeOfADay = (time: Moment, config: YearConfig): DayType => {
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
    return getNextTrainsOfADay(day, config)[0] || null;
};

export const getAllTrainsOfADay = (
    day: Moment,
    config: YearConfig
): Array<Moment> => {
    const type = getDayTypeOfADay(day, config);
    switch (type) {
        case 'Hourly':
        case 'HourlyFiveDays':
            return generateHourlySchedule(day);
        case 'Fourty':
            return generateFourtySchedule(day);
        case 'Twenty':
            return generateTwentySchedule(day);
        case 'TwentyExtended':
            return generateTwentyExtendedSchedule(day);
        default:
            return [];
    }
};

export const getNextTrainsOfADay = (
    day: Moment,
    config: YearConfig
): Array<Moment> => {
    const scheduleOfDay = getAllTrainsOfADay(day, config);
    return scheduleOfDay.filter((train: Moment) => train.isSameOrAfter(day));
};

const generateSchedule = (
    day: Moment,
    inc: number,
    type: moment.unitOfTime.DurationConstructor,
    startHour: number,
    startMinutes: number,
    endHour: number,
    endMinutes: number
): Array<Moment> => {
    const start = moment(day)
        .hours(startHour)
        .minutes(startMinutes)
        .seconds(0)
        .millisecond(0);
    const end = moment(day)
        .hours(endHour)
        .minutes(endMinutes)
        .seconds(0)
        .millisecond(0);

    const schedule = [moment(start)];
    while (start.isBefore(end)) {
        start.add(inc, type);
        // Clone the object each time
        schedule.push(moment(start));
    }

    return schedule;
};

export const generateHourlySchedule = (day: Moment): Array<Moment> => {
    return generateSchedule(day, 1, 'hour', 10, 0, 17, 0);
};
export const generateFourtySchedule = (day: Moment): Array<Moment> => {
    return generateSchedule(day, 40, 'minute', 9, 0, 19, 0);
};
export const generateTwentySchedule = (day: Moment): Array<Moment> => {
    return generateSchedule(day, 20, 'minutes', 9, 0, 20, 0);
};
export const generateTwentyExtendedSchedule = (day: Moment): Array<Moment> => {
    return generateSchedule(day, 20, 'minutes', 9, 0, 23, 40);
};
