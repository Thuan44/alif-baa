import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LetterCounter = ({ count, restartGame }: { count: number; restartGame: () => void }) => {
    return (
        <div className="flex items-center gap-16">
            <span className="text-32 lg:text-44 text-white">{count}/28</span>
            <button
                className="text-white text-24 hover:rotate-360 slow-transition"
                onClick={restartGame}
            >
                <FontAwesomeIcon icon={faRotateRight} />
            </button>
        </div>
    )
}

export default LetterCounter
