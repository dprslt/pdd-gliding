export type Notam = {
    id: string;
    sofiaIdentifier: string;
    type: string;
    qLine: {
        fir: string;
        code23: string;
        code45: string;
        traffic: string;
        purpose: string;
        scope: string;
        lower: number;
        upper: number;
    };
    radius: number;
    coordinates: string;
    itemA: string;
    startValidity: string;
    endValidity: string;
    itemD: string;
    itemE: string;
    itemF?: string;
    itemG?: string;
};

export type NotamsListResponse = {
    notams: Array<Notam>;
    timestamp: string;
};

export async function fetchPDDNotams(): Promise<NotamsListResponse> {
    const response = await fetch(
        'https://hehol.fr/api/notams/pdd-route',
        {
            next: {
                revalidate: 600,
            },
        },
    );

    if (!response.ok) {
        throw new Error(`Unable to fetch PDD notams: ${response.status}`);
    }

    return response.json();
}
