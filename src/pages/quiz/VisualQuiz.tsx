import { faRotateRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import LetterCard from "../../components/cards/LetterCard"
import type { ArabicLetter } from "../../utils/arabicLetters"

const VisualQuiz = () => {
    const [count, setCount] = useState(1)
    const [gameStarted, setGameStarted] = useState(false)
    const [showCountdown, setShowCountdown] = useState(false)
    const [countdown, setCountdown] = useState(3)
    const [selectedOption, setSelectedOption] = useState<ArabicLetter | null>('noon')

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

    // Countdown effect
    useEffect(() => {
        let timer: number
        if (showCountdown && countdown > 0) {
            timer = setTimeout(() => {
                setCountdown((prev) => prev - 1)
            }, 1000)
        } else if (showCountdown && countdown === 0) {
            timer = setTimeout(() => {
                setShowCountdown(false)
                setGameStarted(true)
            }, 1000)
        }
        return () => clearTimeout(timer)
    }, [showCountdown, countdown])

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
                    <div className="text-32 lg:text-44 text-white">00:08</div>
                    <div className="flex items-center gap-16">
                        <span className="text-32 lg:text-44 text-white">
                            {count}/28
                        </span>
                        <button
                            className="text-white text-24 hover:rotate-360 slow-transition"
                            onClick={resetGame}
                        >
                            <FontAwesomeIcon icon={faRotateRight} />
                        </button>
                    </div>
                </div>
            )}

            {showCountdown ? (
                <div className="text-56 text-white font-bold min-h-[60px] flex items-center justify-center">
                    {countdown > 0 ? countdown : "C'est parti !"}
                </div>
            ) : !gameStarted ? (
                <button className="btn-action px-24" onClick={handleGameStart}>
                    Je suis prêt !
                </button>
            ) : null}
            {gameStarted && !showCountdown && (
                <div className="flex flex-col items-center gap-24 w-full max-w-[500px]">
                    <LetterCard letter="noon" />
                    <div className="grid grid-cols-2 gap-12 w-full">
                        <div className={`w-full rounded-xl p-12 border-4 ${selectedOption === "noon" ? "border-action bg-secondary" : "border-transparent bg-secondary/40"}`}>
                            <input type="radio" id="noon" checked />
                            <label htmlFor="noon">noon</label>
                        </div>
                        <div className="w-full bg-secondary/40 rounded-xl p-12 border-4 border-white/40 hover:border-white base-transition">
                            <input type="radio" id="meem" />
                            <label htmlFor="meem">meem</label>
                        </div>
                        <div className="w-full bg-secondary/40 rounded-xl p-12 border-4 border-white/40 hover:border-white base-transition2">
                            <input type="radio" id="jeem" />
                            <label htmlFor="jeem">jeem</label>
                        </div>
                        <div className="w-full bg-secondary/40 rounded-xl p-12 border-4 border-white/40 hover:border-white base-transition2">
                            <label htmlFor="kaaf">kaaf</label>
                            <input type="radio" id="kaaf" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VisualQuiz
