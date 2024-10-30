import { Question, RGBColor } from "./types";

export const QUESTIONS: Question[] = [
    {
        question: "An animal cell contains:",
        answers: [
            { options: ["Cell wall", "Ribosomes"], correct: "Ribosomes" },
            { options: ["Cytoplasm", "Chloroplast"], correct: "Cytoplasm" },
            { options: ["Partially permeable membrane", "Impermeable membrane"], correct: "Partially permeable membrane" },
            { options: ["Cellulose", "Mitochondria"], correct: "Mitochondria" }
        ]
    }
];

// background: linear-gradient(180deg, #76E0C2 0%, #59CADA 100%);
export const CORRECT_BACKGROUND_GRADIENT : RGBColor[] = [
    { r: 118, g: 224, b: 194 },
    { r: 89, g: 202, b: 218 }
];

// background: linear-gradient(180deg, #F1B496 0%, #EA806A 100%);
export const INCORRECT_BACKGROUND_GRADIENT : RGBColor[] = [
    { r: 241, g: 180, b: 150 },
    { r: 234, g: 128, b: 106 }
];

// background: linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%);
export const PARTIALLY_CORRECT_BACKGROUND_GRADIENT : RGBColor[] = [
    { r: 246, g: 184, b: 104 },
    { r: 238, g: 107, b: 45 }
];
