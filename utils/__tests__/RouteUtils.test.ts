import {
    ascendRoute,
    queryStringToObject,
    objectToQueryString,
    mergeRoutes,
} from '../RoutesUtils';

describe('objectToQueryString', () => {
    test('one parameter', () => {
        const result = objectToQueryString({ key: 'value' });
        expect(result).toBe('?key=value');
    });
    test('many parameter', () => {
        const result = objectToQueryString({
            key: 'value',
            param: 2,
        });
        expect(result).toBe('?key=value&param=2');
    });

    test('exclude undefined parameter', () => {
        const result = objectToQueryString({
            key: 'value',
            param: undefined,
        });
        expect(result).toBe('?key=value');
    });
});

describe('queryStringToObect', () => {
    test('it sould convert a single parameter', () => {
        const result = queryStringToObject('?toto=titi');
        expect(result).toEqual({ toto: 'titi' });
    });
    test('it sould convert many parameters', () => {
        const result = queryStringToObject('?toto=titi&tata=tutu');
        expect(result).toEqual({
            toto: 'titi',
            tata: 'tutu',
        });
    });
});

describe('mergeRoutes', () => {
    it('should correctly merge basic routes', () => {
        const route = mergeRoutes('aa', 'bb');
        expect(route).toBe('/aa/bb');
    });

    it('should send back a single / if empty', () => {
        const route = mergeRoutes();
        expect(route).toBe('/');
    });

    it('should correctly remove trailing slash', () => {
        const route = mergeRoutes('aa/', 'bb');
        expect(route).toBe('/aa/bb');
    });

    it('should correctly keep slash', () => {
        const route = mergeRoutes('/aa/', 'bb/cc', '/dd');
        expect(route).toBe('/aa/bb/cc/dd');
    });

    it('should work with special char', () => {
        const route = mergeRoutes('/aa/', 'bb/:cc', '/dd');
        expect(route).toBe('/aa/bb/:cc/dd');
    });

    it('should work with multiple slash', () => {
        const route = mergeRoutes('/aa/', '//dd//');
        expect(route).toBe('/aa/dd');
    });

    it('should work with an empty first char', () => {
        const route = mergeRoutes('/', 'aa');
        expect(route).toBe('/aa');
    });
});

describe('test ascendRoute', () => {
    it('sould go back 0 level and return a route without trailing /', () => {
        expect(ascendRoute('/toto/titi/', 0)).toBe('/toto/titi');
    });

    it('sould go back 1 step, default behavior', () => {
        expect(ascendRoute('/toto/titi/:uuid')).toBe('/toto/titi');
        expect(ascendRoute('/toto/titi/:uuid', 1)).toBe('/toto/titi');
    });

    it('sould go back 2 step', () => {
        expect(ascendRoute('/toto/titi/:uuid', 2)).toBe('/toto');
        expect(ascendRoute('/toto/titi/:uuid/', 2)).toBe('/toto');
    });
});
