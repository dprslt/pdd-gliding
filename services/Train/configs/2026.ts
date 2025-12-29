import moment from 'moment';
import { YearConfig } from '../TrainSchedules';
moment.locale('fr');

export const PanoSchedule2026: YearConfig = {
    periods: [
        {
            from: moment('01/01/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('22/02/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('23/02/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('08/03/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('09/03/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('15/03/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('16/03/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('20/03/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('21/03/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('29/06/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('30/06/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('26/07/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Twenty',
        },
        {
            from: moment('27/07/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('30/08/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'TwentyExtendedOnThursday',
        },
        {
            from: moment('31/08/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('01/11/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('02/11/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('08/11/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('09/11/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('15/11/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('16/11/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('20/11/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('21/11/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('22/11/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('23/11/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('20/12/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },

        {
            from: moment('21/12/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('23/12/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('24/12/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('24/12/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyEndAt1530',
        },
        {
            from: moment('25/12/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('25/12/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('26/12/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('31/12/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
    ],
};
