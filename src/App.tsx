import { Routes, Route } from "react-router-dom"
import Training from "./pages/Training"
import Quiz from "./pages/quiz/Quiz"
import Stats from "./pages/Stats"
import Home from "./pages/Home"
import BaseLayout from "./components/layout/BaseLayout"
import VisualQuiz from "./pages/quiz/VisualQuiz"
import AudioQuiz from "./pages/quiz/AudioQuiz"

function App() {
    return (
        <BaseLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entrainement" element={<Training />} />
                <Route path="/quizz" element={<Quiz />} />
                <Route path="/quizz-visuel" element={<VisualQuiz />} />
                <Route path="/quizz-audio" element={<AudioQuiz />} />
                <Route path="/statistiques" element={<Stats />} />
                <Route path="*" element={<div>Bienvenue !</div>} />
            </Routes>
        </BaseLayout>
    )
}

export default App
