import {
    OPGCMaxWindValues,
    OPGCValues,
    fetchOPGCValues,
    fetchOPGCmaxWind,
} from '../../services/opgc/apiGrafanaOPGC';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function FetchOPGC(
    req: NextApiRequest,
    res: NextApiResponse<OPGCValues & OPGCMaxWindValues>
) {
    const values = await fetchOPGCValues();
    const vmax = await fetchOPGCmaxWind();

    const dict = { ...vmax, ...values };

    console.log(dict);

    res.status(200).json(dict);
}
