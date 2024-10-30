import { useState } from "react";
import useShuffledArray from "../hooks/useShuffledArray";

import "../styles/ToggleQuiz.scss";
import ToggleQuestion from "./ToggleQuestion";
import { Question } from "../types";

type Props = {
    questions: Question[];
};

function ToggleQuiz({questions}: Props) {
    const shuffledQuestions = useShuffledArray(questions);

    const [questionIndex, setQuestionIndex] = useState(0);

    const previousQuestion = () => {
        // Wrap around to the last question when at the first question
        setQuestionIndex((questionIndex - 1 + questions.length) % questions.length);
    };

    const nextQuestion = () => {
        // Wrap around to the first question when at the last question
        setQuestionIndex((questionIndex + 1) % questions.length);
    };

    const question = shuffledQuestions[questionIndex];

    return (
        <div className="ToggleQuiz">
            <ToggleQuestion key={questions.indexOf(question)} question={question.question} answers={question.answers} />
            <div className="navigation">
                <div className="arrow" onClick={previousQuestion}></div>
                <div className="arrow" onClick={nextQuestion}></div>
            </div>
        </div>
    )
}

export default ToggleQuiz;