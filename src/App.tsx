import { QUESTIONS } from "./const";

import ToggleQuiz from "./components/ToggleQuiz";

function App() {
    return (
        <div className="App">
            <ToggleQuiz questions={QUESTIONS} />
        </div>
    );
}

export default App;
