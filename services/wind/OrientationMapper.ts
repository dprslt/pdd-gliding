const segments = [
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

export function convertDegToOrientation(orientation: number): string {
    const segmentIndex = Math.floor((orientation + 11.25) / 22.5) % 16;
    return segments[segmentIndex];
}
