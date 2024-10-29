type Answer = {
    options: string[];
    correct: string;
};

type Question = {
    question: string;
    answers: Answer[];
};

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