import moment from 'moment';
import { PanoSchedule2022 } from '../configs/2022';
import { PanoSchedule2023 } from '../configs/2023';
import { PanoSchedule2024 } from '../configs/2024';
import { PanoSchedule2025 } from '../configs/2025';
import { PanoSchedule2026 } from '../configs/2026';

import {
    foundCurrentPeriod,
    getDayTypeOfADay,
    getNextTrainForADay,
    getAllTrainsOfADay,
    getNextTrainsOfADay,
    isDateCoveredByYearConfig,
} from '../TrainSchedules';

moment.locale('fr');

describe('Testing foundCurrentPeriod', () => {
    it('should return the first period', () => {
        expect(
            foundCurrentPeriod(
                moment(PanoSchedule2022.periods[0].from).add(2, 'd'),
                PanoSchedule2022.periods,
            ),
        ).toStrictEqual(PanoSchedule2022.periods[0]);
    });
    it('should return the correct period', () => {
        expect(
            foundCurrentPeriod(
                moment('23/03/2022', 'L'),
                PanoSchedule2022.periods,
            ),
        ).toStrictEqual(PanoSchedule2022.periods[3]);
        expect(
            foundCurrentPeriod(
                moment('23/07/2022', 'L'),
                PanoSchedule2022.periods,
            ),
        ).toStrictEqual(PanoSchedule2022.periods[6]);
    });
});

describe('Testing isDateCoveredByYearConfig', () => {
    it('should return true for a date inside the config', () => {
        expect(
            isDateCoveredByYearConfig(
                moment('01/01/2022', 'L'),
                PanoSchedule2022,
            ),
        ).toBeTruthy();
    });

    it('should return false for a date outside the config', () => {
        expect(
            isDateCoveredByYearConfig(
                moment('01/01/2021', 'L'),
                PanoSchedule2022,
            ),
        ).toBeFalsy();
    });
});

describe('Testing getDayTypeForADay', () => {
    it('should work with an opened date in the first period', () => {
        expect(
            getDayTypeOfADay(moment('07/01/2022', 'L'), PanoSchedule2022),
        ).toBe('HourlyFiveDays');
    });
    it('should detect a closed date in the first period (certains lundi et mardi)', () => {
        expect(
            getDayTypeOfADay(moment('03/01/2022', 'L'), PanoSchedule2022),
        ).toBe('Closed');
        expect(
            getDayTypeOfADay(moment('15/03/2022', 'L'), PanoSchedule2022),
        ).toBe('Closed');
        expect(
            getDayTypeOfADay(moment('14/02/2022', 'L'), PanoSchedule2022),
        ).toBe('Hourly');
        expect(
            getDayTypeOfADay(moment('19/12/2022', 'L'), PanoSchedule2022),
        ).toBe('Hourly');
    });
    it('should detect a closed date in the closed Period', () => {
        expect(
            getDayTypeOfADay(moment('23/03/2022', 'L'), PanoSchedule2022),
        ).toBe('Closed');
        expect(
            getDayTypeOfADay(moment('17/11/2022', 'L'), PanoSchedule2022),
        ).toBe('Closed');
    });
    it('should detect a closed date in summer and autumn period', () => {
        expect(
            getDayTypeOfADay(moment('18/05/2022', 'L'), PanoSchedule2022),
        ).toBe('Fourty');
        expect(
            getDayTypeOfADay(moment('21/09/2022', 'L'), PanoSchedule2022),
        ).toBe('Fourty');
    });
    it('should detect a closed date in the the winter period', () => {
        expect(
            getDayTypeOfADay(moment('23/12/2022', 'L'), PanoSchedule2022),
        ).toBe('Hourly');
        expect(
            getDayTypeOfADay(moment('21/11/2022', 'L'), PanoSchedule2022),
        ).toBe('Closed');
    });

    it('should detect specific days in summer', () => {
        expect(
            getDayTypeOfADay(moment('21/07/2022', 'L'), PanoSchedule2022),
        ).toBe('TwentyExtended');
        expect(
            getDayTypeOfADay(moment('18/08/2022', 'L'), PanoSchedule2022),
        ).toBe('Twenty');
    });

    it('should detect specific holydays', () => {
        expect(
            getDayTypeOfADay(moment('25/12/2022', 'L'), PanoSchedule2022),
        ).toBe('Closed');
    });
});

describe('testing getNextTrainForADay', () => {
    it('should return the 10AM train for a 5 January at 9am', () => {
        expect(
            getNextTrainForADay(
                moment('05/01/2022 09:05', 'L LT'),
                PanoSchedule2022,
            )?.format,
        ).toBe(moment('05/01/2022 10:00', 'L LT').format);
    });
    it('should return the 18:20 train for a 13May at 18:05', () => {
        expect(
            getNextTrainForADay(
                moment('13/05/2022 18:05', 'L LT'),
                PanoSchedule2022,
            )?.format,
        ).toBe(moment('13/05/2022 18:20', 'L LT').format);
    });
    it('should return the 15:20 train for a Twenty Day', () => {
        expect(
            getNextTrainForADay(
                moment('27/07/2022 15:05', 'L LT'),
                PanoSchedule2022,
            )?.format,
        ).toBe(moment('27/07/2022 15:20', 'L LT').format);
    });

    it('should return null train for a 5 January at 6pm', () => {
        expect(
            getNextTrainForADay(
                moment('05/01/2022 18:00', 'L LT'),
                PanoSchedule2022,
            ),
        ).toBe(null);
    });
});

describe('testing getAllTrainsOfADay', () => {
    it('should return an array of 8 trains', () => {
        expect(
            getAllTrainsOfADay(moment('05/01/2022', 'L'), PanoSchedule2022),
        ).toHaveLength(8);
    });
    it('should return a first train at 9am', () => {
        expect(
            getAllTrainsOfADay(
                moment('05/01/2022', 'L'),
                PanoSchedule2022,
            )?.[0].format('YYYY MM DD HH:mm'),
        ).toBe('2022 01 05 10:00');
    });
});

describe('testing getNextTrainsOfADay', () => {
    it('should return an array of 5 trains', () => {
        expect(
            getNextTrainsOfADay(
                moment('05/01/2022 12:05', 'L LT'),
                PanoSchedule2022,
            ),
        ).toHaveLength(5);
    });
    it('should return a first train at 13am', () => {
        expect(
            getNextTrainsOfADay(
                moment('05/01/2022 12:05', 'L LT'),
                PanoSchedule2022,
            )?.[0].format('YYYY MM DD HH:mm'),
        ).toBe('2022 01 05 13:00');
    });
});

describe('Validate all days are filled for 2022', () => {
    it('should work for all days', () => {
        let time = moment('01/01/2022', 'L');
        while (time.isSameOrBefore(moment('31/12/2022', 'L'))) {
            getNextTrainForADay(time, PanoSchedule2022);
            time = time.add(1, 'day');
        }
    });

    it('should work for 2022-06-12T09:50:17+02:00 (Bug)', () => {
        let time = moment('2022-06-12T09:50:17+02:00');
        expect(
            getNextTrainForADay(time, PanoSchedule2022)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe('2022 06 12 10:20');
    });
});

describe('Validate all days are filled for 2023', () => {
    it('should work for all days', () => {
        let time = moment('01/01/2023', 'L');
        while (time.isSameOrBefore(moment('31/12/2023', 'L'))) {
            getNextTrainForADay(time, PanoSchedule2023);
            time = time.add(1, 'day');
        }
    });

    it('should work during the summer nights ', () => {
        let time = moment('2023-07-20T20:50:17+02:00');
        expect(
            getNextTrainForADay(time, PanoSchedule2023)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe('2023 07 20 21:00');
    });
});

describe('Validate all days are filled for 2024', () => {
    it('should work for all days', () => {
        let time = moment('01/01/2024', 'L');
        while (time.isSameOrBefore(moment('31/12/2024', 'L'))) {
            getNextTrainForADay(time, PanoSchedule2024);
            time = time.add(1, 'day');
        }
    });

    it('should work during the summer nights ', () => {
        let time = moment('2024-07-25T20:50:17+02:00');
        expect(
            getNextTrainForADay(time, PanoSchedule2024)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe('2024 07 25 21:00');
    });
});

describe('Validate all days are filled for 2025', () => {
    it('should pass validity check for all periods', () => {
        PanoSchedule2025.periods.forEach((period) => {
            expect(period.from.isBefore(period.to)).toBeTruthy();
        });
    });

    it('should work for all days', () => {
        let time = moment('01/01/2025', 'L');
        while (time.isSameOrBefore(moment('31/12/2025', 'L'))) {
            getNextTrainForADay(time, PanoSchedule2025);
            time = time.add(1, 'day');
        }
    });

    it('should work during the summer nights ', () => {
        let time = moment('2025-07-31T20:50:17+02:00');
        expect(
            getNextTrainForADay(time, PanoSchedule2025)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe('2025 07 31 21:00');
    });

    it('should work with the new special hours for christmas', () => {
        let time = moment('2025-12-24T15:50:17+02:00');
        expect(
            getNextTrainForADay(time, PanoSchedule2025)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe(undefined);
    });

    it('should work well on extented hours but not a thursday', () => {
        let time = moment('2025-07-30T20:50:17+02:00');
        expect(
            getNextTrainForADay(time, PanoSchedule2025)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe(undefined);
    });

    it('should work with FourtyShort schedule during Dec 26-31', () => {
        let time = moment('26/12/2025 10:15', 'L LT');
        expect(
            getNextTrainForADay(time, PanoSchedule2025)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe('2025 12 26 10:40');
    });

    it('should return 12 trains for a FourtyShort day (Dec 26-31)', () => {
        expect(
            getAllTrainsOfADay(moment('26/12/2025', 'L'), PanoSchedule2025),
        ).toHaveLength(12);
    });

    it('should have first train at 10:00 for FourtyShort schedule', () => {
        expect(
            getAllTrainsOfADay(
                moment('26/12/2025', 'L'),
                PanoSchedule2025,
            )?.[0].format('YYYY MM DD HH:mm'),
        ).toBe('2025 12 26 10:00');
    });

    it('should have last train at 17:20 for FourtyShort schedule', () => {
        const trains = getAllTrainsOfADay(
            moment('26/12/2025', 'L'),
            PanoSchedule2025,
        );
        expect(trains[trains.length - 1].format('YYYY MM DD HH:mm')).toBe(
            '2025 12 26 17:20',
        );
    });
});

describe('Validate all days are filled for 2026', () => {
    it('should pass validity check for all periods', () => {
        PanoSchedule2026.periods.forEach((period) => {
            expect(period.from.isBefore(period.to)).toBeTruthy();
        });
    });

    it('should work for all days', () => {
        let time = moment('01/01/2026', 'L');
        while (time.isSameOrBefore(moment('31/12/2026', 'L'))) {
            getNextTrainForADay(time, PanoSchedule2026);
            time = time.add(1, 'day');
        }
    });

    it('should work during the summer nights ', () => {
        let time = moment('2026-07-30T20:50:17+02:00');
        expect(
            getNextTrainForADay(time, PanoSchedule2026)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe('2026 07 30 21:00');
    });

    it('should work with the new special hours for christmas', () => {
        let time = moment('2026-12-24T15:50:17+02:00');
        expect(
            getNextTrainForADay(time, PanoSchedule2026)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe('2026 12 24 15:20');
    });

    it('should work well on extented hours but not a thursday', () => {
        let time = moment('2026-07-29T20:50:17+02:00');
        expect(
            getNextTrainForADay(time, PanoSchedule2026)?.format(
                'YYYY MM DD HH:mm',
            ),
        ).toBe(undefined);
    });
});
