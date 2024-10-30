import { QUESTIONS } from "./const";
import { shuffleArray } from "./utils";
import ToggleQuiz from "./components/ToggleQuiz";

function App() {
    const questions = shuffleArray(QUESTIONS);

    return (
        <div className="App">
            <ToggleQuiz questions={questions} />
        </div>
    );
}

export default App;
