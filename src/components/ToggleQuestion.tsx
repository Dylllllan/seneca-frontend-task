import { useState } from "react";

import "../styles/ToggleQuestion.scss";
import ToggleAnswer from "./ToggleAnswer";

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

    const score = selectedAnswers.reduce((score, selectedAnswer, index) => {
        const correctAnswer = answers[index].correct;
        return score + (selectedAnswer === correctAnswer ? 1 : 0);
    }, 0);

    const isCorrect = score === selectedAnswers.length;

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

    return (
        <div className="ToggleQuestion">
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
