import { useState } from "react"
import type { ArabicLetter } from "../../utils/arabicLetters"
import CountDown from "../../components/quiz/CountDown"
import Timer from "../../components/quiz/Timer"
import LetterCounter from "../../components/quiz/LetterCounter"
import LetterOptionsGrid from "../../components/quiz/LetterOptionsGrid"

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
                <LetterOptionsGrid selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
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
