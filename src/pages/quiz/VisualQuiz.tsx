import { useEffect, useState } from "react"
import { ARABIC_LETTERS, type ArabicLetter } from "../../utils/arabicLetters"
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
        null
    )
    const [passedLetters, setPassedLetters] = useState<ArabicLetter[]>([])
    const [currentLetter, setCurrentLetter] = useState<ArabicLetter | null>(
        null
    )

    const handleGameStart = () => {
        setShowCountdown(true)
        setCountdown(3)
    }

    const restartGame = () => {
        setCount(0)
        setGameStarted(false)
        setShowCountdown(false)
        setCountdown(3)
        setSelectedOption(null)
        setPassedLetters([])
        setCurrentLetter(null)
    }

    const getRandomLetter = (): ArabicLetter | null => {
        if (passedLetters.length === ARABIC_LETTERS.length) {
            console.log("Game Over")
            return null
        }
        const letters = ARABIC_LETTERS
        const randomIndex = Math.floor(Math.random() * letters.length)
        if (passedLetters.includes(letters[randomIndex])) {
            return getRandomLetter()
        }
        setPassedLetters((prev) => [...prev, letters[randomIndex]])
        return letters[randomIndex] as ArabicLetter
    }

    useEffect(() => {
        if (gameStarted) {
            setCurrentLetter(getRandomLetter())
        }
    }, [gameStarted])

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
                    <LetterCounter count={count} restartGame={restartGame} />
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
                <LetterOptionsGrid
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    currentLetter={currentLetter}
                />
            )}
        </div>
    )
}

// TODO:
// 1. Add timer feature ✅
// 2. Display random letter ✅
// 3. Show correct/wrong answer feedback
// 4. Increment score after each question
// 5. Track score
// 6. End game after 28 questions and show final score with feedback for each letter

export default VisualQuiz
