import { useState } from "react";

import ToggleQuestion from "./ToggleQuestion";

type Props = {
    questions: {
        question: string;
        answers: {
            options: string[];
            correct: string;
        }[];
    }[];
};

function ToggleQuiz({questions}: Props) {
    const [questionIndex, setQuestionIndex] = useState(0);

    const previousQuestion = () => {
        // Wrap around to the last question when at the first question
        setQuestionIndex((questionIndex - 1 + questions.length) % questions.length);
    };

    const nextQuestion = () => {
        // Wrap around to the first question when at the last question
        setQuestionIndex((questionIndex + 1) % questions.length);
    };

    const question = questions[questionIndex];

    return (
        <div className="ToggleQuiz">
            <ToggleQuestion key={questionIndex} question={question.question} answers={question.answers} />
            <div className="navigation">
                <button onClick={previousQuestion}>Previous</button>
                <button onClick={nextQuestion}>Next</button>
            </div>
        </div>
    )
}

export default ToggleQuiz;