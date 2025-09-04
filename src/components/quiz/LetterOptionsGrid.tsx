import type { ArabicLetter } from "../../utils/arabicLetters"
import LetterCard from "../cards/LetterCard"

const LetterOptionsGrid = ({
    selectedOption,
    setSelectedOption,
    currentLetter,
}: {
    selectedOption: ArabicLetter | null
    setSelectedOption: (option: ArabicLetter | null) => void
    currentLetter: ArabicLetter | null
}) => {
    return (
        <div className="flex flex-col items-center gap-24 w-full max-w-[500px]">
            <LetterCard letter={currentLetter} single={true} />
            <div className="grid grid-cols-2 gap-12 w-full">
                <button
                    className={`w-full rounded-xl p-12 border-4 quick-transition ${
                        selectedOption === "noon"
                            ? "border-action bg-accent"
                            : "border-white/40 bg-secondary/40 hover:border-white"
                    }`}
                >
                    <input
                        type="radio"
                        id="noon"
                        name="letter-option"
                        checked={selectedOption === "noon"}
                        onChange={() => setSelectedOption("noon")}
                    />
                    <label htmlFor="noon">noon</label>
                </button>
            </div>
        </div>
    )
}

export default LetterOptionsGrid
