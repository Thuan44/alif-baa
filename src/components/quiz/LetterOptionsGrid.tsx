import { useEffect, useState } from "react"
import { ARABIC_LETTERS, type ArabicLetter } from "../../utils/arabicLetters"
import LetterCard from "../cards/LetterCard"

const LetterOptionsGrid = ({
    selectedOption,
    currentLetter,
    handleSelectOption
}: {
    selectedOption: ArabicLetter | null
    currentLetter: ArabicLetter | null
    handleSelectOption: (letter: ArabicLetter) => void
}) => {
    const [options, setOptions] = useState<ArabicLetter[]>([])

    const getOptions = (correctLetter: ArabicLetter) => {
        const options = new Set<ArabicLetter>()
        options.add(correctLetter)
        while (options.size < 4) {
            const randomIndex = Math.floor(Math.random() * ARABIC_LETTERS.length)
            options.add(ARABIC_LETTERS[randomIndex])
        }
        const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5)
        return shuffledOptions
    }

    useEffect(() => {
        if (currentLetter) {
            const options = getOptions(currentLetter)
            setOptions(options)
        }
    }, [currentLetter])

    return (
        <div className="flex flex-col items-center gap-24 w-full max-w-[500px]">
            <LetterCard letter={currentLetter} single={true} />
            <div className="grid grid-cols-2 gap-12 w-full">
                {options.map((option: ArabicLetter) => (
                <button
                    className={`w-full h-[80px] rounded-xl border-4 quick-transition text-20 ${
                        selectedOption === option
                            ? "border-action bg-accent text-black"
                            : "border-white/40 bg-secondary/40 text-white hover:border-white"
                    }`}
                    key={option}
                >
                    <input
                        type="radio"
                        id={option}
                        value={option}
                        name="letter-option"
                        checked={selectedOption === option}
                        onChange={() => handleSelectOption(option)}
                        className="hidden size-full"
                    />
                    <label htmlFor={option} className="flex items-center justify-center size-full cursor-pointer">{option}</label>
                </button>
                ))}
            </div>
        </div>
    )
}

export default LetterOptionsGrid
