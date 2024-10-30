import { RGBColor } from "./types";

export function interpolateColors(color1: RGBColor, color2: RGBColor, scale: number): RGBColor {
    return {
        r: color1.r + (color2.r - color1.r) * scale,
        g: color1.g + (color2.g - color1.g) * scale,
        b: color1.b + (color2.b - color1.b) * scale
    };
}

export function createLinearGradient(color1: RGBColor, color2: RGBColor): string {
    return `linear-gradient(180deg, rgb(${color1.r}, ${color1.g}, ${color1.b}) 0%, rgb(${color2.r}, ${color2.g}, ${color2.b}) 100%)`;
}

export function shuffleArray(array: any[]) {
    // Use a copy of the array to avoid mutating the original
    return [...array].sort(() => Math.random() - 0.5);
}

export function repeatUntil(operation: () => any, condition: (result: any) => boolean) {
    let result;
    do {
        result = operation();
    } while (!condition(result));
    return result;
}
