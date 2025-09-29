import { NextApiRequest, NextApiResponse } from 'next';
import {
    OPGCValues,
    fetchLastValuesFromGrafana,
} from 'services/opgc/apiGrafanaOPGC';

type ErrorPayload = {
    error: string;
};

export default async function FetchOPGC(
    req: NextApiRequest,
    res: NextApiResponse<OPGCValues | ErrorPayload>,
) {
    const values = await fetchLastValuesFromGrafana();

    if (!values) {
        res.status(500);
        res.json({
            error: 'Unable to get data from grafana server',
        });
        throw new Error('Unable to get data from grafana server');
    }

    res.status(200).json(values);
}
