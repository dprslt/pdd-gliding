import https from 'https';
import tls from 'tls';

const options = {
    rejectUnauthorized: false,
};

export const DGACcustomSSLAgent = new https.Agent(options);
