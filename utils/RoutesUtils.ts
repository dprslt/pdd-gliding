import qs, { ParsedQs } from 'qs';

import { usePathname } from 'next/navigation';

export const objectToQueryString = (
    object: Record<string, string | number | undefined>
): string => `?${qs.stringify(object)}`;

export const queryStringToObject = (queryString: string): ParsedQs => {
    let finalQuery = queryString;
    if (finalQuery.startsWith('?')) {
        finalQuery = finalQuery.substring(1);
    }
    return qs.parse(finalQuery);
};

export const mergeRoutes = (...pathFragment: Array<string>): string => {
    // Removing trailing and initial slash
    const cleanedFragment = pathFragment
        .filter((fragment) => fragment !== undefined && fragment !== null)
        .map((fragment) => fragment.replace(/\/+$/, '').replace(/^\/+/, ''))
        // Removing empty fragment, for example if a fragment contains a single '/'
        .filter((fragment) => fragment.length > 0);
    const fullPath = cleanedFragment.join('/');
    return `/${fullPath}`;
};

export const ascendRoute = (baseRoute: string, level: number = 1): string => {
    if (level === 0) {
        return mergeRoutes(baseRoute);
    }
    const routeFragment = baseRoute.split('/');
    const finalOffset = baseRoute.endsWith('/')
        ? Math.abs(level) + 1
        : Math.abs(level);
    // Since we split on /, the first element is always empty
    const remainingFragments = routeFragment.slice(1, -finalOffset);

    return mergeRoutes('/', ...remainingFragments);
};

export const mergeRoutesAnchor = (baseRoute: string, hash: string): string => {
    const split = baseRoute.split('#');

    return `${split[0]}#${hash}`;
};

type SubPageHooks = () => number;
export const createSubPageHook = (urls: Array<string>): SubPageHooks => {
    return (): number => {
        const pathname = usePathname();
        const paths = pathname?.split('/');
        paths?.shift();
        const stringValue = (Array.isArray(paths) && paths[1]) || undefined;
        const value = urls.findIndex((v) => v === stringValue);
        return value || 0;
    };
};
