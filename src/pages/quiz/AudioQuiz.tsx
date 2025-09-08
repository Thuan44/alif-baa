import Timer from "../../components/quiz/Timer"
import LetterCounter from "../../components/quiz/LetterCounter"
import CountDown from "../../components/quiz/CountDown"
import { useQuiz } from "../../hooks/useQuiz"

const AudioQuiz = () => {
    const {
        count,
        gameStarted,
        gameOver,
        showCountdown,
        countdown,
        setCountdown,
        setShowCountdown,
        setGameStarted,
        handleGameStart,
        restartQuiz,
    } = useQuiz()

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center">Quizz audio</h1>
            {!gameOver && (
                <div className="flex items-center justify-center py-12 px-24 rounded-xl bg-secondary/40 w-fit mb-60">
                    <p className="subtitle text-center">
                        Écoute la lettre et choisis la bonne lettre.
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
        </div>
    )
}

export default AudioQuiz
