// Liveness probe for the container healthcheck (Docker Swarm stack `pdd`) and
// for uptime monitoring. Deliberately dependency-free: it must answer even
// when the upstream APIs (OPGC, Holfuy, Windbird, hehol) are down or slow.
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    status: 'ok';
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.status(200).json({ status: 'ok' });
}
