import { DateTime } from 'luxon';
import { NextApiRequest, NextApiResponse } from 'next';
import {
    OPGCValues,
    fetchLastValuesFromGrafana,
} from 'services/opgc/apiGrafanaOPGC';
import {
    fetchOPGCValues,
    fetchOPGCmaxWind,
} from 'services/opgc/synthetized-txt-files';

type ErrorPayload = {
    error: string;
};

export default async function FetchOPGC(
    req: NextApiRequest,
    res: NextApiResponse<OPGCValues | ErrorPayload>,
) {
    const [opgcDataFromGrafana, maxWind] = await Promise.all([
        fetchLastValuesFromGrafana().catch((e) => {
            console.error(e);
            return null;
        }),
        fetchOPGCmaxWind().catch((e) => {
            console.error(e);
            return null;
        }),
    ]);

    let opgcData = opgcDataFromGrafana;

    // First Fallback try to get last file
    if (!opgcData) {
        opgcData = await fetchOPGCValues();

        if (
            DateTime.fromISO(opgcData.datetime)
                .diffNow('minutes')
                .as('minutes') < -15
        ) {
            opgcData = null;
        }
    }

    if (!opgcData) {
        res.status(500);
        res.json({
            error: 'Unable to get data from opgc',
        });
        throw new Error('Unable to get data from opgc');
    }

    const dict = { ...maxWind, ...opgcData };

    res.status(200).json(dict);
}
