import Timer from "../../components/quiz/Timer"
import LetterCounter from "../../components/quiz/LetterCounter"
import CountDown from "../../components/quiz/CountDown"
import { useQuiz } from "../../hooks/useQuiz"
import { ARABIC_LETTERS } from "../../utils/arabicLetters"
import LetterCard from "../../components/cards/LetterCard"
import GameOver from "../../components/quiz/GameOver"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"

const AudioQuiz = () => {
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
        handleSelectOption,
        handleGameStart,
        restartQuiz,
        setCurrentLetter,
        getRandomLetter,
        setScoreStore,
        handleClickAudio,
    } = useQuiz()

    useEffect(() => {
        if (gameStarted) {
            setCurrentLetter(getRandomLetter())
        }
    }, [gameStarted])

    useEffect(() => {
        console.log('selected option', selectedOption)
        if (selectedOption === null && gameStarted && !gameOver) {
            setCurrentLetter(getRandomLetter())
            setCount((c) => c + 1)
        }
    }, [selectedOption])

    useEffect(() => {
        setScoreStore(score)
    }, [score])

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

            {gameStarted && !showCountdown && !gameOver && (
                <div className="flex flex-col items-center gap-32 w-full">
                    <button
                        className="btn-action w-[80px]"
                        onClick={() => handleClickAudio(currentLetter)}
                        aria-label="Lire le son de la lettre"
                    >
                        <FontAwesomeIcon icon={faVolumeHigh} />
                    </button>
                    <div
                        className="grid grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-12 xl:gap-24 w-full"
                        style={{ direction: "rtl" }}
                    >
                        {[...ARABIC_LETTERS].map((letter) => (
                            <LetterCard
                                key={letter}
                                letter={letter}
                                onClick={() => handleSelectOption(letter)}
                                inQuiz
                                selectedOption={selectedOption}
                            />
                        ))}
                    </div>
                </div>
            )}

            {gameOver && <GameOver restartQuiz={restartQuiz} />}
        </div>
    )
}

export default AudioQuiz

// TODO:
// 1. Jouer l'audio à chaque nouvelle lettre
// 2. Mettre en évidence la lettre sélectionnée,
// 3. Incrémenter le compteur
// 4. Passer à la lettre suivante
// 5. Conserver le timer et le score
// 6. Afficher le feedback
