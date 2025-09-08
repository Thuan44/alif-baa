import Timer from "../../components/quiz/Timer"
import LetterCounter from "../../components/quiz/LetterCounter"
import CountDown from "../../components/quiz/CountDown"
import { useQuiz } from "../../hooks/useQuiz"
import GameOver from "../../components/quiz/GameOver"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import LetterAlphabetGrid from "../../components/quiz/LetterAlphabetGrid"

const AudioQuiz = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    const {
        count,
        gameStarted,
        gameOver,
        showCountdown,
        countdown,
        currentLetter,
        selectedOption,
        score,
        setCountdown,
        setCount,
        setShowCountdown,
        setGameStarted,
        handleGameStart,
        restartQuiz,
        setCurrentLetter,
        getRandomLetter,
        setScoreStore,
        handleSelectOption,
        handleClickAudio,
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

    useEffect(() => {
        if (currentLetter) handleClickAudio(currentLetter)
    }, [currentLetter])

    return (
        <>
            <title>Alifbaa – Quiz Audio</title>
            <meta
                name="description"
                content="Apprends les lettres arabes en écoutant leur prononciation avec le quiz audio Alif Baa."
            ></meta>
            <div className="flex flex-col items-center">
                <h1 className="text-center">Quizz audio</h1>
                {!gameOver && (
                    <div className="flex items-center justify-center py-12 px-24 rounded-xl bg-secondary/40 w-fit mb-40 lg:mb-60">
                        <p className="subtitle text-center">
                            Écoute et choisis la bonne lettre.
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
                    <div className="flex flex-col items-center gap-32 w-full">
                        <button
                            className="btn-action w-[80px]"
                            onClick={() => handleClickAudio(currentLetter)}
                            aria-label="Lire le son de la lettre"
                        >
                            <FontAwesomeIcon icon={faVolumeHigh} />
                        </button>
                        <LetterAlphabetGrid
                            selectedOption={selectedOption}
                            handleSelectOption={handleSelectOption}
                        />
                    </div>
                )}

                {gameOver && <GameOver restartQuiz={restartQuiz} isAudioQuiz />}
            </div>
        </>
    )
}

export default AudioQuiz
