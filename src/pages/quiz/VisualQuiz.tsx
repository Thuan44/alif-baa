import { useState } from "react"
import LetterCard from "../../components/cards/LetterCard"
import type { ArabicLetter } from "../../utils/arabicLetters"
import CountDown from "../../components/quiz/CountDown"
import Timer from "../../components/quiz/Timer"
import LetterCounter from "../../components/quiz/LetterCounter"

const VisualQuiz = () => {
    const [count, setCount] = useState(1)
    const [gameStarted, setGameStarted] = useState(false)
    const [showCountdown, setShowCountdown] = useState(false)
    const [countdown, setCountdown] = useState(3)
    const [selectedOption, setSelectedOption] = useState<ArabicLetter | null>(
        "noon"
    )

    const handleGameStart = () => {
        setShowCountdown(true)
        setCountdown(3)
    }

    const resetGame = () => {
        setCount(0)
        setGameStarted(false)
        setShowCountdown(false)
        setCountdown(3)
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center">Quizz visuel</h1>
            <div className="flex items-center justify-center py-12 px-24 rounded-xl bg-secondary/40 w-fit mb-60">
                <p className="subtitle text-center">
                    Observe la lettre et choisis la bonne réponse.
                </p>
            </div>

            {gameStarted && !showCountdown && (
                <div className="flex justify-between items-center w-full max-w-[500px]  mb-60">
                    <Timer
                        gameStarted={gameStarted}
                        showCountdown={showCountdown}
                    />
                    <LetterCounter count={count} resetGame={resetGame} />
                </div>
            )}

            {!gameStarted && (
                <CountDown
                    showCountdown={showCountdown}
                    countdown={countdown}
                    setCountdown={setCountdown}
                    setShowCountdown={setShowCountdown}
                    setGameStarted={setGameStarted}
                    handleGameStart={handleGameStart}
                />
            )}

            {gameStarted && !showCountdown && (
                <div className="flex flex-col items-center gap-24 w-full max-w-[500px]">
                    <LetterCard letter="noon" single={true} />
                    <div className="grid grid-cols-2 gap-12 w-full">
                        <div
                            className={`w-full rounded-xl p-12 border-4 ${
                                selectedOption === "noon"
                                    ? "border-action bg-accent"
                                    : "border-transparent bg-secondary/40"
                            }`}
                        >
                            <input type="radio" id="noon" checked />
                            <label htmlFor="noon">noon</label>
                        </div>
                        <div className="w-full bg-secondary/40 rounded-xl p-12 border-4 border-white/40 hover:border-white quick-transition">
                            <input type="radio" id="meem" />
                            <label htmlFor="meem">meem</label>
                        </div>
                        <div className="w-full bg-secondary/40 rounded-xl p-12 border-4 border-white/40 hover:border-white quick-transition2">
                            <input type="radio" id="jeem" />
                            <label htmlFor="jeem">jeem</label>
                        </div>
                        <div className="w-full bg-secondary/40 rounded-xl p-12 border-4 border-white/40 hover:border-white quick-transition2">
                            <label htmlFor="kaaf">kaaf</label>
                            <input type="radio" id="kaaf" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// TODO:
// 1. Add timer feature ✅
// 2. Display random letter
// 3. Show correct/wrong answer feedback
// 4. Increment score after each question
// 5. Track score
// 6. End game after 28 questions and show final score with feedback for each letter

export default VisualQuiz
