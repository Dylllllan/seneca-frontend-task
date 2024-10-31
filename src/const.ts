import { Question, RGBColor } from "./types";

export const QUESTIONS: Question[] = [
    {
        question: "Which items are needed to survive on a deserted island?",
        answers: [
            { options: ["Sunscreen", "Compass"], correct: "Compass" },
            { options: ["Bottle of water", "Bottle of cola", "Bottle of milk"], correct: "Bottle of water" },
            { options: ["Map", "Book"], correct: "Map" }
        ]
    },
    {
        question: "Which of these are types of renewable energy?",
        answers: [
            { options: ["Solar", "Coal"], correct: "Solar" },
            { options: ["Wind", "Nuclear", "Oil"], correct: "Wind" }
        ]
    },
    {
        question: "Which of these are fundamental forces in physics?",
        answers: [
            { options: ["Gravity", "Friction"], correct: "Gravity" },
            { options: ["Electromagnetic", "Tension", "Elastic"], correct: "Electromagnetic" },
        ]
    },
    {
        question: "Which of these characters are from Greek mythology?",
        answers: [
            { options: ["Zeus", "Odin"], correct: "Zeus" },
            { options: ["Hercules", "Thor", "Loki"], correct: "Hercules" },
            { options: ["Athena", "Freya"], correct: "Athena" }
        ]
    },
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
export const CORRECT_GRADIENT: RGBColor[] = [
    { r: 118, g: 224, b: 194 },
    { r: 89, g: 202, b: 218 }
];

// background: linear-gradient(180deg, #F1B496 0%, #EA806A 100%);
export const START_INCORRECT_GRADIENT: RGBColor[] = [
    { r: 241, g: 180, b: 150 },
    { r: 234, g: 128, b: 106 }
];

// background: linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%);
export const END_INCORRECT_GRADIENT: RGBColor[] = [
    { r: 246, g: 184, b: 104 },
    { r: 238, g: 107, b: 45 }
];
