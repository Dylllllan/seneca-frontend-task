import { Question, RGBColor } from "./types";

export const QUESTIONS: Question[] = [
    /*
    Q. "What are the ideal conditions inside an office?" A. (good pay, bad pay) (lot of
    meetings, less meetings), (free coffee, expensive coffee), (bear in office, dog in
    office).
    */
    {
        question: "What are the ideal conditions inside an office?",
        answers: [
            { options: ["good pay", "bad pay"], correct: "good pay" },
            { options: ["lot of meetings", "less meetings"], correct: "less meetings" },
            { options: ["free coffee", "expensive coffee"], correct: "free coffee" },
            { options: ["bear in office", "dog in office"], correct: "dog in office" }
        ]
    },

    /*
    Q. "Which are the best sports people & teams?"
    A. (Liverpool, Chelsea, Man Utd), (Serena Williams, Naomi Osaka)
    */
    {
        question: "Which are the best sports people & teams?",
        answers: [
            { options: ["Liverpool", "Chelsea", "Man Utd"], correct: "Liverpool" },
            { options: ["Serena Williams", "Naomi Osaka"], correct: "Serena Williams" }
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
export const CORRECT_BACKGROUND_GRADIENT: RGBColor[] = [
    { r: 118, g: 224, b: 194 },
    { r: 89, g: 202, b: 218 }
];

// background: linear-gradient(180deg, #F1B496 0%, #EA806A 100%);
export const INCORRECT_BACKGROUND_GRADIENT: RGBColor[] = [
    { r: 241, g: 180, b: 150 },
    { r: 234, g: 128, b: 106 }
];

// background: linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%);
export const PARTIALLY_CORRECT_BACKGROUND_GRADIENT: RGBColor[] = [
    { r: 246, g: 184, b: 104 },
    { r: 238, g: 107, b: 45 }
];
