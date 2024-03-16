import { convertDegToOrientation } from '../OrientationMapper';

describe('Testing convertDegToOrientation', () => {
    it('0 should be N', () => {
        expect(convertDegToOrientation(0)).toStrictEqual('N');
    });
    it('355 should be N', () => {
        expect(convertDegToOrientation(355)).toStrictEqual('N');
    });

    it('180 should be S', () => {
        expect(convertDegToOrientation(180)).toStrictEqual('S');
    });

    it('57 should be ENE', () => {
        expect(convertDegToOrientation(57)).toStrictEqual('ENE');
    });
    it('56 should be NE', () => {
        expect(convertDegToOrientation(56)).toStrictEqual('NE');
    });
    it('270 should be O', () => {
        expect(convertDegToOrientation(270)).toStrictEqual('O');
    });
});
