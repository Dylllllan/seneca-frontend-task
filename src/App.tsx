import { QUESTIONS } from "./const";

import ToggleQuestion from "./components/ToggleQuestion";

function App() {
    const index = 1;
    const question = QUESTIONS[index];

    return (
        <div className="App">
            <ToggleQuestion key={index} question={question.question} answers={question.answers} />
        </div>
    );
}

export default App;
