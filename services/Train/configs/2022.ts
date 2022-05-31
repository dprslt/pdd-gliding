import moment from 'moment';
import { YearConfig } from '../TrainSchedules';
moment.locale('fr');

export const PanoSchedule2022: YearConfig = {
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
