export const windSegment = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SEE',
    'S',
    'SSO',
    'SO',
    'OSO',
    'O',
    'ONO',
    'NO',
    'NNO',
];

export const numericWindSegment = Array(17)
    .fill(0)
    .map((a, i, arr) => i * 22.5);

export const numericHalfWindSegment = Array(9)
    .fill(0)
    .map((a, i, arr) => i * 45);

export function convertDegToOrientation(orientation: number): string {
    const segmentIndex = Math.floor((orientation + 11.25) / 22.5) % 16;
    return windSegment[segmentIndex];
}
