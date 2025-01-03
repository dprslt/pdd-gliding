import moment from 'moment';
import { YearConfig } from '../TrainSchedules';
moment.locale('fr');

export const PanoSchedule2025: YearConfig = {
    periods: [
        {
            from: moment('01/01/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('23/02/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('24/02/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('09/03/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('10/03/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('16/03/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('17/03/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('21/03/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('22/03/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('30/06/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('01/07/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('13/07/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Twenty',
        },
        {
            from: moment('14/07/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('24/08/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'TwentyExtendedOnThursday',
        },
        {
            from: moment('25/08/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('31/08/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Twenty',
        },
        {
            from: moment('01/09/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('02/11/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('03/11/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('09/11/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('10/11/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('16/11/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('17/11/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('21/11/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('22/11/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('23/11/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('24/11/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('21/12/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },

        {
            from: moment('22/12/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('23/12/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('24/12/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('24/12/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyEndAt1530',
        },
        {
            from: moment('25/12/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('25/12/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('26/12/2025', 'DD/MM/YYYY').startOf('day'),
            to: moment('31/12/2025', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
    ],
};
