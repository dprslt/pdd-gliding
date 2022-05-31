import moment from 'moment';
import {
    foundCurrentPeriod,
    getDayTypeForADay,
    getNextTrainForADay,
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

describe('testing getNextTrainForADay', () => {
    it('should return the 10AM train for a 5 January at 9am', () => {
        expect(
            getNextTrainForADay(
                moment('05/01/2022 09:05', 'L LT'),
                Schedule2022
            )?.format
        ).toBe(moment('05/01/2022 10:00', 'L LT').format);
    });
    it('should return the 18:20 train for a 13May at 18:05', () => {
        expect(
            getNextTrainForADay(
                moment('13/05/2022 18:05', 'L LT'),
                Schedule2022
            )?.format
        ).toBe(moment('13/05/2022 18:20', 'L LT').format);
    });
    it('should return the 15:20 train for a Twenty Day', () => {
        expect(
            getNextTrainForADay(
                moment('27/07/2022 15:05', 'L LT'),
                Schedule2022
            )?.format
        ).toBe(moment('27/07/2022 15:20', 'L LT').format);
    });

    it('should return null train for a 5 January at 6pm', () => {
        expect(
            getNextTrainForADay(
                moment('05/01/2022 18:00', 'L LT'),
                Schedule2022
            )
        ).toBe(null);
    });
});
