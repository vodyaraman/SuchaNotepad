import { Dimensions } from 'react-native';

export const getFontSizes = () => {
    const { width, height } = Dimensions.get('window');
    const scaleFactor = Math.min(width, height) / 375;

    return {
        small: 12 * scaleFactor,
        medium: 16 * scaleFactor,
        large: 20 * scaleFactor,
        title: 24 * scaleFactor,
        subtitle: 20 * scaleFactor,
        body: 16 * scaleFactor,
        caption: 14 * scaleFactor,
        button: 18 * scaleFactor,
        header: 22 * scaleFactor,
        footer: 14 * scaleFactor,
        label: 16 * scaleFactor,
        input: 16 * scaleFactor
    };
};

export const FontSizes = getFontSizes();
