import { kv } from '@vercel/kv';
import {
    fetchOPGCValues,
    fetchOPGCmaxWind,
} from '../../services/opgc/meter-opgc';

export default async function FetchOPGC(req, res) {
    // const cart = await kv.get<{ id: string; quantity: number }[]>(params.user);

    const values = await fetchOPGCValues();
    const vmax = await fetchOPGCmaxWind();

    const dict = { ...vmax, ...values };

    console.log(dict);

    res.status(200).json(dict);
}
