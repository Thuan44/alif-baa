import type { ArabicLetter } from "../../utils/arabicLetters"
import LetterCard from "../cards/LetterCard"

const LetterOptionsGrid = ({
    selectedOption,
    setSelectedOption,
}: {
    selectedOption: ArabicLetter | null
    setSelectedOption: (option: ArabicLetter | null) => void
}) => {
    return (
        <div className="flex flex-col items-center gap-24 w-full max-w-[500px]">
            <LetterCard letter="noon" single={true} />
            <div className="grid grid-cols-2 gap-12 w-full">
                <div
                    className={`w-full rounded-xl p-12 border-4 ${
                        selectedOption === "noon"
                            ? "border-action bg-accent"
                            : "border-transparent bg-secondary/40"
                    }`}
                >
                    <input type="radio" id="noon" checked />
                    <label htmlFor="noon">noon</label>
                </div>
                <div className="w-full bg-secondary/40 rounded-xl p-12 border-4 border-white/40 hover:border-white quick-transition">
                    <input type="radio" id="meem" />
                    <label htmlFor="meem">meem</label>
                </div>
                <div className="w-full bg-secondary/40 rounded-xl p-12 border-4 border-white/40 hover:border-white quick-transition2">
                    <input type="radio" id="jeem" />
                    <label htmlFor="jeem">jeem</label>
                </div>
                <div className="w-full bg-secondary/40 rounded-xl p-12 border-4 border-white/40 hover:border-white quick-transition2">
                    <label htmlFor="kaaf">kaaf</label>
                    <input type="radio" id="kaaf" />
                </div>
            </div>
        </div>
    )
}

export default LetterOptionsGrid
