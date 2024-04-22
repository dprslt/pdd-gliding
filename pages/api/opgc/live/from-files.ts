import {
    fetchOPGCValues,
    fetchOPGCmaxWind,
} from 'services/opgc/synthetized-txt-files';
import {
    OPGCMaxWindValues,
    OPGCValues,
} from '../../../../services/opgc/apiGrafanaOPGC';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function FetchOPGC(
    req: NextApiRequest,
    res: NextApiResponse<OPGCValues & OPGCMaxWindValues>
) {
    const values = await fetchOPGCValues();
    const vmax = await fetchOPGCmaxWind();

    const dict = { ...vmax, ...values };

    res.status(200).json(dict);
}
