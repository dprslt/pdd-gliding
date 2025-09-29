import { hasNotUndefinedKeys, hasOnlyUndefinedKeys } from '../ObjectUtils';

test('hasNotUndefinedKeys should return false', () => {
    expect(hasNotUndefinedKeys({})).toBeFalsy();
    expect(
        hasNotUndefinedKeys({ keyA: undefined, keyB: undefined }),
    ).toBeFalsy();
});
test('hasNotUndefinedKeys should return true', () => {
    expect(
        hasNotUndefinedKeys({
            keyA: 'XX',
        }),
    ).toBeTruthy();
    expect(
        hasNotUndefinedKeys({
            keyA: 6,
        }),
    ).toBeTruthy();
    expect(
        hasNotUndefinedKeys({
            keyA: null,
        }),
    ).toBeTruthy();
    expect(
        hasNotUndefinedKeys({ keyA: undefined, keyB: 'undefined' }),
    ).toBeTruthy();
});

test('hasOnlyUndefinedKeys should return true', () => {
    expect(hasOnlyUndefinedKeys({})).toBeTruthy();
    expect(
        hasOnlyUndefinedKeys({
            keyA: undefined,
            keyB: undefined,
        }),
    ).toBeTruthy();
});
test('hasOnlyUndefinedKeys should return false', () => {
    expect(
        hasOnlyUndefinedKeys({
            keyA: null,
        }),
    ).toBeFalsy();
    expect(
        hasOnlyUndefinedKeys({ keyA: undefined, keyB: 'undefined' }),
    ).toBeFalsy();
});
