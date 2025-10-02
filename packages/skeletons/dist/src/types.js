export const typographySizes = [
    'label01',
    'body01',
    'body02',
    'bulletList01',
    'heading01',
    'heading02',
];
export const avatarSizes = [
    'xlarge',
    'large',
    'medium',
    'small',
    'xsmall',
];
// this should likely go into a shared place, as it will need to be the same for Avatar with OX-1664
export const avatarSizeMap = {
    xlarge: 80,
    large: 48,
    medium: 40,
    small: 32,
    xsmall: 24,
};
export const sizes = [...typographySizes, ...avatarSizes];
