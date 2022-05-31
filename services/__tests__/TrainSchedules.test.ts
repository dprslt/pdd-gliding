import moment from 'moment';
import {
    foundCurrentPeriod,
    getDayTypeForADay,
    Schedule2022,
} from '../TrainSchedules';

moment.locale('fr');

describe('Testing foundCurrentPeriod', () => {
    it('should return the first period', () => {
        expect(
            foundCurrentPeriod(
                moment(Schedule2022.periods[0].from).add(2, 'd'),
                Schedule2022.periods
            )
        ).toStrictEqual(Schedule2022.periods[0]);
    });
    it('should return the correct period', () => {
        expect(
            foundCurrentPeriod(moment('23/03/2022', 'L'), Schedule2022.periods)
        ).toStrictEqual(Schedule2022.periods[3]);
        expect(
            foundCurrentPeriod(moment('23/07/2022', 'L'), Schedule2022.periods)
        ).toStrictEqual(Schedule2022.periods[6]);
    });
});

describe('Testing getDayTypeForADay', () => {
    it('should work with an opened date in the first period', () => {
        expect(getDayTypeForADay(moment('07/01/2022', 'L'), Schedule2022)).toBe(
            'HourlyFiveDays'
        );
    });
    it('should detect a closed date in the first period (certains lundi et mardi)', () => {
        expect(getDayTypeForADay(moment('03/01/2022', 'L'), Schedule2022)).toBe(
            'Closed'
        );
        expect(getDayTypeForADay(moment('15/03/2022', 'L'), Schedule2022)).toBe(
            'Closed'
        );
        expect(getDayTypeForADay(moment('14/02/2022', 'L'), Schedule2022)).toBe(
            'Hourly'
        );
        expect(getDayTypeForADay(moment('19/12/2022', 'L'), Schedule2022)).toBe(
            'Hourly'
        );
    });
    it('should detect a closed date in the closed Period', () => {
        expect(getDayTypeForADay(moment('23/03/2022', 'L'), Schedule2022)).toBe(
            'Closed'
        );
        expect(getDayTypeForADay(moment('17/11/2022', 'L'), Schedule2022)).toBe(
            'Closed'
        );
    });
    it('should detect a closed date in summer and autumn period', () => {
        expect(getDayTypeForADay(moment('18/05/2022', 'L'), Schedule2022)).toBe(
            'Fourty'
        );
        expect(getDayTypeForADay(moment('21/09/2022', 'L'), Schedule2022)).toBe(
            'Fourty'
        );
    });
    it('should detect a closed date in the the winter period', () => {
        expect(getDayTypeForADay(moment('23/12/2022', 'L'), Schedule2022)).toBe(
            'Hourly'
        );
        expect(getDayTypeForADay(moment('21/11/2022', 'L'), Schedule2022)).toBe(
            'Closed'
        );
    });

    it('should detect specific days in summer', () => {
        expect(getDayTypeForADay(moment('21/07/2022', 'L'), Schedule2022)).toBe(
            'TwentyExtended'
        );
        expect(getDayTypeForADay(moment('18/08/2022', 'L'), Schedule2022)).toBe(
            'Twenty'
        );
    });

    it('should detect specific holydays', () => {
        expect(getDayTypeForADay(moment('25/12/2022', 'L'), Schedule2022)).toBe(
            'Closed'
        );
    });
});
