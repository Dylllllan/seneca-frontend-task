export type RGBColor = {
    r: number;
    g: number;
    b: number;
};

export type Answer = {
    options: string[];
    correct: string;
};

export type Question = {
    question: string;
    answers: Answer[];
};
