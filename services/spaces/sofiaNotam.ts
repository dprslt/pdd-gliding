import { DateTime } from 'luxon';
import { URLSearchParams } from 'url';
export type SofiaNotamRouteParams = {
    ':operation': string;
    duration: string;
    traffic: string;
    fl_lower: string;
    fl_upper: string;
    width: string;
    radiusAD: string;
    route: Array<string>;
    lang: string;
    routeVal: string;
};
export type SofiaNotamTimeParams = {
    valid_from: string;
    departure_date: string;
    departure_time: string;
};
export type SofiaNotamQueryParams = SofiaNotamRouteParams &
    SofiaNotamTimeParams;

export const PDDNorthSouthRoute = {
    ':operation': 'postNarrowRoutePibRequest',
    operation: 'postNarrowRoutePibRequest',
    duration: '2400',
    traffic: 'V',
    fl_lower: '0',
    fl_upper: '115',
    width: '15',
    radiusAD: '10',
    route: ['LFBK', 'LFLW'],
    isFromSofia: true,
    target: '#aside-target',
    href: '/sofia/pages/notamroute.html',
    typeVol: 'N',
    lang: 'fr',
    routeVal: 'false',
    // valid_from: '2024-03-18T22:00:16Z',
    // departure_date: '19-03-2024',
    // departure_time: '1200',
};

export type NOTAMstructure = {
    pibSection: string;
    id: string;
    nof: string;
    series: string;
    number: number;
    yean: number;
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
    startValidityFormat: string;
    endValidityFormat: string;
    itemE: string;
    multiLanguage: {
        itemE: string;
    };
    itemD: string;
    itemF?: string;
    itemG?: string;
    marker: string;
    valid: string;
};

export type NotamResponse = {
    notams: Array<NOTAMstructure>;
    timestamp: string;
};

export async function fetchNOTAMForRoute(
    config: SofiaNotamRouteParams
): Promise<NotamResponse | null> {
    const date = DateTime.now().setZone('Europe/Paris').startOf('hour');

    if (!date.isValid) {
        throw new Error('InvalidDate');
    }

    const fullConfig: SofiaNotamQueryParams = {
        ...config,
        valid_from: date.toUTC().toISO({
            suppressMilliseconds: true,
            extendedZone: false,
        }),
        departure_date: date.toFormat('dd-MM-yyyy'),
        departure_time: date.toFormat('HHmm'),
        // uuid: v4(),
    };

    // console.log(fullConfig);

    const { route, ...otherParams } = fullConfig;

    const urlParams = new URLSearchParams(otherParams);
    route.forEach((point) => urlParams.append('route[]', point));

    // console.log(urlParams.toString());

    const headers = new Headers();
    headers.append('Accept', 'application/json, text/javascript, */*; q=0.01');
    headers.append(
        'Referer',
        'https://sofia-briefing.aviation-civile.gouv.fr/sofia/pages/notamform.html'
    );
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Origin', 'https://sofia-briefing.aviation-civile.gouv.fr');
    headers.append(
        'Content-Type',
        'application/x-www-form-urlencoded; charset=UTF-8'
    );

    // get a cookie for the session
    const r = await fetch(
        `https://sofia-briefing.aviation-civile.gouv.fr/sofia/pages/homepage.html`,
        {
            headers,
            next: {
                revalidate: 600,
            },
        }
    );

    const cookie = r.headers.getSetCookie()[0];

    headers.append('Cookie', cookie);

    const notamsRequest = await fetch(
        `https://sofia-briefing.aviation-civile.gouv.fr/sofia`,
        {
            method: 'POST',
            body: urlParams.toString(),
            headers,
            credentials: 'include',
            next: {
                revalidate: 600,
            },
        }
    );

    try {
        const response = await notamsRequest.json();

        try {
            const notams = JSON.parse(response['status.message']);

            // https://www.notams.faa.gov/common/qcode/qcode.html

            const FIRNOTAMS: Array<NOTAMstructure> = [];

            // console.log(notams);

            Object.values(notams['listnotams']['FIR']).forEach((cat: any) => {
                cat.forEach((notamImpacted: any) => {
                    notamImpacted['sortedNotamsByImpactedAerodromes']?.forEach(
                        (aerodromes: any) => {
                            aerodromes.sortedNotamsByPurpose.forEach(
                                (purpose: any) => {
                                    FIRNOTAMS.push(...purpose.notam);
                                }
                            );
                        }
                    );
                    // console.log(JSON.stringify(notamImpated, null, 2));
                });
            });

            return { notams: FIRNOTAMS, timestamp: notams.issued };
        } catch (e) {
            console.error(response);
            throw new Error('Unable to parse notams, query may be invalid');
        }
    } catch (e) {
        console.error(e);
        throw new Error('Unable to parse response');
    }

    return null;
}
