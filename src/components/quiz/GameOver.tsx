import {
    faCheck,
    faChevronDown,
    faRotateRight,
    faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { motion } from "framer-motion"
import { useQuizStore } from "../../store/quiz.store"

const GameOver = ({
    restartQuiz,
    isAudioQuiz,
}: {
    restartQuiz: () => void
    isAudioQuiz?: boolean
}) => {
    const [showDetail, setShowDetail] = useState(false)
    const { timer, score, feedbackVisual } = useQuizStore((state) => state)
    const listFeedbackVisual = Object.values(feedbackVisual)

    const minutes = String(Math.floor(timer / 60)).padStart(2, "0")
    const seconds = String(timer % 60).padStart(2, "0")

    return (
        <div className="flex flex-col items-center gap-32 mt-60">
            <div className="text-24 text-white text-center">
                <p>Bien joué ! Ta partie est terminée.</p>
            </div>
            <div className="flex flex-col items-center gap-32 w-full max-w-[500px] lg:min-w-[400px] text-24 text-black bg-accent p-32 rounded-lg">
                <div className="flex items-center gap-12 text-16 lg:text-24">
                    Ton temps :
                    <span className="text-32 lg:text-44 font-semibold">
                        {minutes}:{seconds}
                    </span>
                </div>
                <div className="flex items-center gap-12 text-16 lg:text-24">
                    Ton score :
                    <span className="text-32 lg:text-44 font-semibold">
                        {score}/28
                    </span>
                </div>
            </div>
            <button className="btn-action small p-12" onClick={restartQuiz}>
                <span className="mr-4">Recommencer</span>
                <FontAwesomeIcon icon={faRotateRight} className="text-16" />
            </button>
            <button
                className="text-white flex items-center gap-8 -mb-20"
                onClick={() => setShowDetail(!showDetail)}
            >
                Voir le détail
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`slow-transition  ${
                        showDetail ? "scale-y-[-1]" : ""
                    }`}
                />
            </button>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: showDetail ? "auto" : 0,
                    opacity: showDetail ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
            >
                <div className="flex flex-col gap-16 lg:gap-8 bg-secondary/40 p-24 rounded-lg text-white w-full lg:min-w-[500px] max-w-[1200px] base-transition">
                    {listFeedbackVisual.map((fb: any, index: number) => (
                        <div
                            className="flex justify-between items-center gap-24"
                            key={fb}
                        >
                            <div className="flex items-center">
                                {index + 1}.{" "}
                                <img
                                    src={`/images/${fb[0]}.png`}
                                    alt=""
                                    className="w-40 lg:w-48"
                                />
                                ({fb[0]})
                            </div>
                            <div className="flex items-center gap-4 lg:gap-12">
                                <div className="flex items-center">
                                    <span className="hidden lg:inline-block">
                                        Ta réponse
                                    </span>
                                    <span className="inline-block lg:hidden">
                                        Toi
                                    </span>{" "}
                                    :{" "}
                                    {isAudioQuiz ? (
                                        <img
                                            src={`/images/${fb[1]}.png`}
                                            alt=""
                                            className="w-40 lg:w-48"
                                        />
                                    ) : (
                                        fb[1]
                                    )}
                                </div>
                                <FontAwesomeIcon
                                    icon={fb[0] === fb[1] ? faCheck : faXmark}
                                    className={`text-20 ${
                                        fb[0] === fb[1]
                                            ? "text-success"
                                            : "text-danger"
                                    }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default GameOver
