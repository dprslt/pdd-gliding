import moment, { Moment } from 'moment';
import { useEffect, useState } from 'react';

export const useMoment = (refreshRateSeconds: number = 5): Moment => {
    const [time, setTime] = useState(moment());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(moment()),
            refreshRateSeconds * 1000,
        );
        return () => clearInterval(interval);
    });

    return time;
};
