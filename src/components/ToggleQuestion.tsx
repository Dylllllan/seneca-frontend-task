import { useState } from "react";
import useShuffledArray from "../hooks/useShuffledArray";

import "../styles/ToggleQuestion.scss";
import ToggleAnswer from "./ToggleAnswer";

import { CORRECT_GRADIENT, START_INCORRECT_GRADIENT, END_INCORRECT_GRADIENT } from "../const";
import { createLinearGradient, interpolateColors, repeatUntil } from "../utils";
import { Question } from "../types";

type Props = Question;

function ToggleQuestion({ question, answers }: Props) {
    // Shuffle the order of the answers when the answers change
    const shuffledAnswers = useShuffledArray(answers);

    // Initialise the selected answers with a random option for each answer
    const [selectedOptions, setSelectedOptions] = useState<string[]>(() =>
        repeatUntil(
            // Choose a random option for each answer
            () => {
                return shuffledAnswers.map(({ options }) => options[Math.floor(Math.random() * options.length)]);
            },
            // Check that there is at least one incorrect option
            (selectedOptions) => selectedOptions.some((selectedOption: string, index: number) => selectedOption !== shuffledAnswers[index].correct)
        ));

    // Calculate the score based on the selected options to the answers
    const score = selectedOptions.reduce((score, selectedOption, index) => {
        const correctOption = shuffledAnswers[index].correct;
        return score + (selectedOption === correctOption ? 1 : 0);
    }, 0);

    // Check if all selected options to the answers are correct
    const isCorrect = score === selectedOptions.length;

    // Function to update the selected options state when an option is selected
    const selectAnswer = (index: number, option: string) => {
        if (isCorrect) {
            // All answers are correct, so the question is locked
            return;
        }

        setSelectedOptions((currentAnswers) => {
            // Immutable update of the selected options state
            return currentAnswers.map((currentAnswer, currentIndex) => {
                return currentIndex === index ? option : currentAnswer;
            });
        });
    };

    // Function to calculate the background gradient based on the current score for the question
    const getBackgroundGradient = (isCorrect: boolean, score: number) => {
        if (isCorrect) {
            return createLinearGradient(CORRECT_GRADIENT[0], CORRECT_GRADIENT[1]);
        }

        const scale = score / (selectedOptions.length - 1);
        const gradientStart = interpolateColors(START_INCORRECT_GRADIENT[0], END_INCORRECT_GRADIENT[0], scale);
        const gradientEnd = interpolateColors(START_INCORRECT_GRADIENT[1], END_INCORRECT_GRADIENT[1], scale);

        return createLinearGradient(gradientStart, gradientEnd);
    };

    const backgroundGradient = getBackgroundGradient(isCorrect, score);

    return (
        <div className="ToggleQuestion" style={{ background: backgroundGradient }}>
            <h2 className="question">{question}</h2>
            <div className="answers">
                {shuffledAnswers.map(({ options }, index) => (
                    <ToggleAnswer
                        key={answers.indexOf(shuffledAnswers[index])}
                        options={options}
                        selectedOption={selectedOptions[index]}
                        onSelect={(option) => selectAnswer(index, option)}
                        locked={isCorrect}
                    />
                ))}
            </div>
            <h3 className="answerStatus">The answer is {isCorrect ? "correct" : "incorrect"}</h3>
        </div>
    );
}

export default ToggleQuestion;
