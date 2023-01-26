import moment from 'moment';
import { YearConfig } from '../TrainSchedules';
moment.locale('fr');

export const PanoSchedule2023: YearConfig = {
    periods: [
        {
            from: moment('01/01/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('02/01/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('03/01/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('05/02/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('06/02/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('19/02/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            from: moment('20/02/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('19/03/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('20/03/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('24/03/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('25/03/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('30/06/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('01/07/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('16/07/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'Twenty',
        },
        {
            from: moment('17/07/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('13/08/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'TwentyExtendedOnThursday',
        },
        {
            from: moment('14/08/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('31/08/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'Twenty',
        },
        {
            from: moment('01/09/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('05/11/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            from: moment('06/11/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('12/11/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('13/11/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('17/11/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            from: moment('18/11/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('25/12/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            from: moment('26/12/2023', 'DD/MM/YYYY').startOf('day'),
            to: moment('31/12/2023', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
    ],
};
