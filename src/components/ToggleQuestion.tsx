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
    return (
        <div className="ToggleQuestion">
            <h2 className="question">{question}</h2>
            <div className="answers">
                {answers.map(({ options }, index) => (
                    <ToggleAnswer
                        key={index}
                        options={options}
                    />
                ))}
            </div>
            <h3 className="answerStatus">The answer is incorrect</h3>
        </div>
    );
}

export default ToggleQuestion;
