import { useMemo, useState } from "react";

import "../styles/ToggleQuestion.scss";
import ToggleAnswer from "./ToggleAnswer";
import { CORRECT_BACKGROUND_GRADIENT, INCORRECT_BACKGROUND_GRADIENT, PARTIALLY_CORRECT_BACKGROUND_GRADIENT } from "../const";
import { createLinearGradient, interpolateColors, repeatUntil, shuffleArray } from "../utils";

type Props = {
    question: string;
    answers: {
        options: string[];
        correct: string;
    }[];
};

function ToggleQuestion({ question, answers }: Props) {
    // Shuffle the order of the answers when the answers change
    const shuffledAnswers = useMemo(() => shuffleArray(answers), [answers]);

    // Initialise the selected answers with a random option for each answer
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
        repeatUntil(
            // Choose a random option for each answer
            () => {
                return shuffledAnswers.map(({ options }) => options[Math.floor(Math.random() * options.length)]);
            },
            // Check that there is at least one incorrect answer
            (selectedAnswers) => selectedAnswers.some((selectedAnswer: string, index: number) => selectedAnswer !== shuffledAnswers[index].correct)
        ));

    // Calculate the score based on the selected answers
    const score = selectedAnswers.reduce((score, selectedAnswer, index) => {
        const correctAnswer = shuffledAnswers[index].correct;
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
                {shuffledAnswers.map(({ options }, index) => (
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
