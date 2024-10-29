import { QUESTIONS } from "./const";

import ToggleQuestion from "./components/ToggleQuestion";

function App() {
    const question = QUESTIONS[0];

    return (
        <div className="App">
            <ToggleQuestion question={question.question} answers={question.answers} />
        </div>
    );
}

export default App;
