import moment from 'moment';
import { YearConfig } from '../TrainSchedules';
moment.locale('fr');

export const PanoSchedule2024: YearConfig = {
    periods: [
        {
            from: moment('01/01/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('07/01/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('03/01/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('10/02/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('11/02/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('12/02/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('12/02/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('17/02/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('18/02/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('18/02/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('19/02/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('03/03/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('04/03/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('17/03/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('18/03/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('22/03/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('23/03/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('30/06/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('01/07/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('14/07/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Twenty',
        },
        {
            from: moment('15/07/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('11/08/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'TwentyExtendedOnThursday',
        },
        {
            from: moment('12/08/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('31/08/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Twenty',
        },
        {
            from: moment('01/09/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('03/11/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('04/11/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('10/11/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('11/11/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('11/11/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('12/11/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('12/11/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('13/11/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('17/11/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('18/11/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('22/11/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('23/11/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('22/12/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('23/12/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('23/12/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('24/12/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('25/12/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('26/12/2024', 'DD/MM/YYYY').startOf('day'),
            to: moment('31/12/2024', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
    ],
};
