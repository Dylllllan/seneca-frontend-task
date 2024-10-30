import { useState } from "react";

import "../styles/ToggleQuestion.scss";
import ToggleAnswer from "./ToggleAnswer";
import { CORRECT_BACKGROUND_GRADIENT, INCORRECT_BACKGROUND_GRADIENT, PARTIALLY_CORRECT_BACKGROUND_GRADIENT } from "../const";
import { createLinearGradient, interpolateColors } from "../utils";

type Props = {
    question: string;
    answers: {
        options: string[];
        correct: string;
    }[];
};

function ToggleQuestion({ question, answers }: Props) {
    // Initialise the selected answers as the first option for each answer
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(answers.map(({ options }) => options[0]));

    // Calculate the score based on the selected answers
    const score = selectedAnswers.reduce((score, selectedAnswer, index) => {
        const correctAnswer = answers[index].correct;
        return score + (selectedAnswer === correctAnswer ? 1 : 0);
    }, 0);

    // Check if all answers are correct
    const isCorrect = score === selectedAnswers.length;

    // Function to update the selected answers state when an option is selected
    const selectAnswer = (index: number, option: string) => {
        if (isCorrect) {
            // All answers are correct, so the question is locked
            return;
        }

        setSelectedAnswers((currentAnswers) => {
            return currentAnswers.map((currentAnswer, currentIndex) => {
                return currentIndex === index ? option : currentAnswer;
            });
        });
    };

    const getBackgroundGradient = (isCorrect: boolean, score: number) => {
        if (isCorrect) {
            return createLinearGradient(CORRECT_BACKGROUND_GRADIENT[0], CORRECT_BACKGROUND_GRADIENT[1]);
        }

        const scale = score / selectedAnswers.length;
        const gradientStart = interpolateColors(INCORRECT_BACKGROUND_GRADIENT[0], PARTIALLY_CORRECT_BACKGROUND_GRADIENT[0], scale);
        const gradientEnd = interpolateColors(INCORRECT_BACKGROUND_GRADIENT[1], PARTIALLY_CORRECT_BACKGROUND_GRADIENT[1], scale);

        return createLinearGradient(gradientStart, gradientEnd);
    };
    
    const backgroundGradient = getBackgroundGradient(isCorrect, score);

    return (
        <div className="ToggleQuestion" style={{ background: backgroundGradient }}>
            <h2 className="question">{question}</h2>
            <div className="answers">
                {answers.map(({ options }, index) => (
                    <ToggleAnswer
                        key={index}
                        options={options}
                        selectedOption={selectedAnswers[index]}
                        onSelect={(option) => selectAnswer(index, option)}
                    />
                ))}
            </div>
            <h3 className="answerStatus">The answer is {isCorrect ? "correct" : "incorrect"}</h3>
        </div>
    );
}

export default ToggleQuestion;
