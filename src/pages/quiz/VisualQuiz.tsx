import { useEffect, useState } from "react"
import { ARABIC_LETTERS, type ArabicLetter } from "../../utils/arabicLetters"
import CountDown from "../../components/quiz/CountDown"
import Timer from "../../components/quiz/Timer"
import LetterCounter from "../../components/quiz/LetterCounter"
import LetterOptionsGrid from "../../components/quiz/LetterOptionsGrid"
import GameOver from "../../components/quiz/GameOver"
import { useQuizStore } from "../../store/quiz.store"

const VisualQuiz = () => {
    const [count, setCount] = useState(1)
    const [gameStarted, setGameStarted] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [showCountdown, setShowCountdown] = useState(false)
    const [countdown, setCountdown] = useState(3)
    const [selectedOption, setSelectedOption] = useState<ArabicLetter | null>(
        null
    )
    const [passedLetters, setPassedLetters] = useState<ArabicLetter[]>([])
    const [currentLetter, setCurrentLetter] = useState<ArabicLetter | null>(
        null
    )
    const [score, setScore] = useState(0)
    const setScoreStore = useQuizStore((s) => s.setScore)
    const setFeedbackVisual = useQuizStore((s) => s.setFeedbackVisual)
    const clearQuiz = useQuizStore((s) => s.clearQuiz)

    const handleGameStart = () => {
        setShowCountdown(true)
        setCountdown(3)
        clearQuiz()
    }

    const restartQuiz = () => {
        setCount(1)
        setScore(0)
        setGameOver(false)
        setGameStarted(false)
        setShowCountdown(false)
        setCountdown(3)
        setSelectedOption(null)
        setPassedLetters([])
        setCurrentLetter(null)
        clearQuiz()
    }

    const pickRandomLetter = (): ArabicLetter => {
        const available = ARABIC_LETTERS.filter(
            (l) => !passedLetters.includes(l)
        )
        const randomIndex = Math.floor(Math.random() * available.length)
        return available[randomIndex]
    }

    const getRandomLetter = (): ArabicLetter | null => {
        const letter = pickRandomLetter()
        setPassedLetters((prev) => [...prev, letter])
        return letter
    }

    const checkAnswer = (selected: ArabicLetter) => {
        if (!currentLetter) return false
        const isCorrect = selected === currentLetter
        if (isCorrect) setScore((s) => s + 1)
        setTimeout(() => {
            if (passedLetters.length === 2) {
                setGameOver(true)
            }
            if (passedLetters.length === ARABIC_LETTERS.length) {
                setGameOver(true)
                return null
            }
            setSelectedOption(null)
            setCurrentLetter(getRandomLetter())
            setCount((c) => c + 1)
        }, 800)
        return isCorrect
    }

    const handleSelectOption = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value as ArabicLetter
        setSelectedOption(selectedValue)
        checkAnswer(selectedValue)
        if (currentLetter) setFeedbackVisual(currentLetter, selectedValue)
    }

    useEffect(() => {
        if (gameStarted) {
            setCurrentLetter(getRandomLetter())
        }
    }, [gameStarted])

    useEffect(() => {
        setScoreStore(score)
    }, [score])

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center">Quizz visuel</h1>
            {!gameOver && (
                <div className="flex items-center justify-center py-12 px-24 rounded-xl bg-secondary/40 w-fit mb-60">
                    <p className="subtitle text-center">
                        Observe la lettre et choisis la bonne réponse.
                    </p>
                </div>
            )}

            {gameStarted && !showCountdown && !gameOver && (
                <div className="flex justify-between items-center w-full max-w-[500px]  mb-60">
                    <Timer
                        gameStarted={gameStarted}
                        showCountdown={showCountdown}
                    />
                    <LetterCounter count={count} restartQuiz={restartQuiz} />
                </div>
            )}

            {!gameStarted && !gameOver && (
                <CountDown
                    showCountdown={showCountdown}
                    countdown={countdown}
                    setCountdown={setCountdown}
                    setShowCountdown={setShowCountdown}
                    setGameStarted={setGameStarted}
                    handleGameStart={handleGameStart}
                />
            )}

            {gameStarted && !showCountdown && !gameOver && (
                <LetterOptionsGrid
                    selectedOption={selectedOption}
                    currentLetter={currentLetter}
                    handleSelectOption={(e) => handleSelectOption(e)}
                />
            )}

            {gameOver && <GameOver restartQuiz={restartQuiz} />}
        </div>
    )
}

export default VisualQuiz
