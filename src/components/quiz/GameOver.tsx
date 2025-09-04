import {
    faCheck,
    faChevronDown,
    faRotateRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { motion } from "framer-motion"

const GameOver = () => {
    const [showDetail, setShowDetail] = useState(false)

    return (
        <div className="flex flex-col items-center gap-32">
            <div className="text-24 text-white text-center">
                <p>Bien joué ! Ta partie est terminée.</p>
            </div>
            <div className="flex flex-col items-center gap-32 max-w-[500px] min-w-[400px] text-24 text-black bg-accent p-32 rounded-lg">
                <div className="flex items-center gap-12">
                    Ton temps :{" "}
                    <span className="text-44 font-semibold">12:00</span>
                </div>
                <div className="flex items-center gap-12">
                    Ton score :{" "}
                    <span className="text-44 font-semibold">20/28</span>
                </div>
            </div>
            <button className="btn-action small p-12">
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
                <div className="flex flex-col gap-8 bg-secondary/40 p-24 rounded-lg text-white w-full lg:min-w-[500px] max-w-[1200px] base-transition">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            1.{" "}
                            <img
                                src="/images/noon.png"
                                alt=""
                                className="w-48"
                            />
                            (noon)
                        </div>
                        <div className="flex items-center gap-12">
                            <div>Ta réponse : noon</div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-success text-20"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            1.{" "}
                            <img
                                src="/images/noon.png"
                                alt=""
                                className="w-48"
                            />
                            (noon)
                        </div>
                        <div className="flex items-center gap-12">
                            <div>Ta réponse : noon</div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-success text-20"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            1.{" "}
                            <img
                                src="/images/noon.png"
                                alt=""
                                className="w-48"
                            />
                            (noon)
                        </div>
                        <div className="flex items-center gap-12">
                            <div>Ta réponse : noon</div>
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-success text-20"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default GameOver
