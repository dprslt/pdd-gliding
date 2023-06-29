import { mergeClasses } from '../StyleHelper';

test('it should concatenate the parameters to classes', () => {
    expect(mergeClasses('a', 'b')).toBe('a b');
    expect(mergeClasses('', 'b')).toBe('b');
    expect(mergeClasses('a', null, 'b')).toBe('a b');
    expect(mergeClasses('a b', 'c')).toBe('a b c');
});

test('it should handle the ternary notation', () => {
    const emptyVal = null;
    expect(mergeClasses(emptyVal && 'a', 'b')).toBe('b');

    const trueVal = false;
    expect(mergeClasses(trueVal ? 'a' : '', 'b')).toBe('b');
});
