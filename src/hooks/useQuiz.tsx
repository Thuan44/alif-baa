import { useState } from "react"
import { ARABIC_LETTERS, type ArabicLetter } from "../utils/arabicLetters"
import { useQuizStore } from "../store/quiz.store"

export function useQuiz() {
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
    let currentAudio: HTMLAudioElement | null = null

    const handleGameStart = () => {
        setShowCountdown(true)
        setCountdown(3)
        clearQuiz()
    }

        const handleClickAudio = (letter: ArabicLetter | null) => {
        if (currentAudio) {
            currentAudio.pause()
            currentAudio.currentTime = 0
        }
        const audio = new Audio(`/audios/${letter}.wav`)
        currentAudio = audio
        audio.play()
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
            if (passedLetters.length === ARABIC_LETTERS.length) {
                setGameOver(true)
                return null
            }
            setSelectedOption(null)
        }, 700)
        return isCorrect
    }

    const handleSelectOption = (letter: ArabicLetter) => {
        setSelectedOption(letter)
        checkAnswer(letter)
        if (currentLetter) setFeedbackVisual(currentLetter, letter)
    }

    return {
        count,
        setCount,
        gameStarted,
        setGameStarted,
        gameOver,
        setGameOver,
        showCountdown,
        setShowCountdown,
        countdown,
        setCountdown,
        selectedOption,
        setSelectedOption,
        passedLetters,
        setPassedLetters,
        currentLetter,
        setCurrentLetter,
        score,
        currentAudio,
        setScore,
        setScoreStore,
        handleGameStart,
        restartQuiz,
        setFeedbackVisual,
        getRandomLetter,
        handleSelectOption,
        handleClickAudio
    }
}
