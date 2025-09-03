import { Routes, Route } from "react-router-dom"
import Training from "./pages/Training"
import Quiz from "./pages/Quiz"
import Stats from "./pages/Stats"
import Home from "./pages/Home"
import BaseLayout from "./components/layout/BaseLayout"

function App() {
    return (
        <BaseLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/training" element={<Training />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="*" element={<div>Bienvenue !</div>} />
            </Routes>
        </BaseLayout>
    )
}

export default App
