import moment from 'moment';
import { YearConfig } from '../TrainSchedules';
moment.locale('fr');

export const PanoSchedule2026: YearConfig = {
    periods: [
        {
            // 1–4 janv : Toutes les 40 min – Planning réduit
            from: moment('01/01/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('04/01/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'FourtyShort',
        },
        {
            // 5 janv – 6 fév : Toutes les heures – 5 jours/semaine
            from: moment('05/01/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('06/02/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            // 7–22 fév : Toutes les 40 min – Planning réduit
            from: moment('07/02/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('22/02/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'FourtyShort',
        },
        {
            // 23 fév – 22 mars : Toutes les heures – 5 jours/semaine
            from: moment('23/02/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('22/03/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            // 23–27 mars : Fermeture
            from: moment('23/03/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('27/03/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            // 28 mars – 30 juin : Toutes les 40 min – Tous les jours
            from: moment('28/03/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('30/06/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            // 1–2 juil : Toutes les 20 min – Tous les jours
            from: moment('01/07/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('12/07/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Twenty',
        },
        {
            // 13 juil – 16 août : Toutes les 20 min – Service étendu le jeudi
            from: moment('13/07/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('16/08/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'TwentyExtendedOnThursday',
        },
        {
            // 17–31 août : Toutes les 20 min – Tous les jours
            from: moment('17/08/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('31/08/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Twenty',
        },
        {
            // 1 sept – 17 oct : Toutes les 40 min – Tous les jours
            from: moment('01/09/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('17/10/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Fourty',
        },
        {
            // 18 oct – 15 nov : Toutes les heures – 5 jours/semaine
            from: moment('18/10/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('15/11/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            // 16–20 nov : Fermeture
            from: moment('16/11/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('20/11/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            // 21–22 nov : Toutes les heures – Tous les jours
            from: moment('21/11/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('22/11/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Hourly',
        },
        {
            // 23 nov – 4 déc : Toutes les heures – 5 jours/semaine
            from: moment('23/11/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('04/12/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            // Samedi 5 déc : Fermeture
            from: moment('05/12/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('05/12/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'Closed',
        },
        {
            // 6–18 déc : Toutes les heures – 5 jours/semaine
            from: moment('06/12/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('18/12/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'HourlyFiveDays',
        },
        {
            // 19–31 déc : Toutes les 40 min – Planning réduit
            from: moment('19/12/2026', 'DD/MM/YYYY').startOf('day'),
            to: moment('31/12/2026', 'DD/MM/YYYY').endOf('day'),
            status: 'FourtyShort',
        },
    ],
};
