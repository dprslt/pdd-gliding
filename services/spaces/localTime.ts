import { DateTime } from 'luxon';
import { ReactNode } from 'react';

export function translateUTCRangetoLocalInMessage(
    message: string,
    currentTime: DateTime,
): ReactNode {
    if (!message) {
        return message;
    }
    // Extract Times

    const localeMessage = message.replace(/[0-9]{4}-[0-9]{4}/g, (timeRange) => {
        const [start, end] = timeRange.split('-');

        const startTime = currentTime.toUTC().set({
            hour: Number.parseInt(start.slice(0, 2)),
            minute: Number.parseInt(start.slice(2, 4)),
            second: 0,
            millisecond: 0,
        });

        const endTime = currentTime.toUTC().set({
            hour: Number.parseInt(end.slice(0, 2)),
            minute: Number.parseInt(end.slice(2, 4)),
            second: 0,
            millisecond: 0,
        });

        // console.log({ startTime: startTime.toISO(), endTime: endTime.toISO() });
        // console.log({
        //     startTime: startTime.setZone('Europe/Paris').toFormat('HHmm'),
        //     endTime: endTime.setZone('Europe/Paris').toFormat('HHmm'),
        // });

        return `${startTime.setZone('Europe/Paris').toFormat('HHmm')}-${endTime
            .setZone('Europe/Paris')
            .toFormat('HHmm')}`;
    });

    // console.log({ matches });
    // console.log(message);
    // console.log(localeMessage);

    return localeMessage;
}
