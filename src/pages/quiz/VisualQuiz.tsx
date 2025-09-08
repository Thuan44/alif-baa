import { useEffect } from "react"
import CountDown from "../../components/quiz/CountDown"
import Timer from "../../components/quiz/Timer"
import LetterCounter from "../../components/quiz/LetterCounter"
import LetterOptionsGrid from "../../components/quiz/LetterOptionsGrid"
import GameOver from "../../components/quiz/GameOver"
import { useQuiz } from "../../hooks/useQuiz"

const VisualQuiz = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    const {
        count,
        score,
        gameStarted,
        gameOver,
        showCountdown,
        countdown,
        currentLetter,
        selectedOption,
        setCount,
        setCountdown,
        setShowCountdown,
        setGameStarted,
        handleGameStart,
        restartQuiz,
        setCurrentLetter,
        setScoreStore,
        getRandomLetter,
        handleSelectOption,
    } = useQuiz()

    useEffect(() => {
        if (gameStarted) {
            setCurrentLetter(getRandomLetter())
        }
    }, [gameStarted])

    useEffect(() => {
        if (selectedOption === null && gameStarted && !gameOver) {
            setCurrentLetter(getRandomLetter())
            setCount((c) => c + 1)
        }
    }, [selectedOption])

    useEffect(() => {
        setScoreStore(score)
    }, [score])

    return (
        <>
            <title>Alifbaa – Quiz Visuel</title>
            <meta
                name="description"
                content="Apprends et révise les lettres arabes grâce au quiz visuel Alif Baa. Reconnais chaque lettre et choisis la bonne réponse."
            ></meta>
            <div className="flex flex-col items-center">
                <h1 className="text-center">Quizz visuel</h1>
                {!gameOver && (
                    <div className="flex items-center justify-center py-12 px-24 rounded-xl bg-secondary/40 w-fit mb-40 lg:mb-60">
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
                        <LetterCounter
                            count={count}
                            restartQuiz={restartQuiz}
                        />
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
        </>
    )
}

export default VisualQuiz
