import { useEffect, useState } from "react"
import { ARABIC_LETTERS, type ArabicLetter } from "../../utils/arabicLetters"
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
    const [options, setOptions] = useState<ArabicLetter[]>([])

    const getOptions = (correctLetter: ArabicLetter) => {
        const options = new Set<ArabicLetter>()
        options.add(correctLetter)
        while (options.size < 4) {
            const randomIndex = Math.floor(Math.random() * ARABIC_LETTERS.length)
            options.add(ARABIC_LETTERS[randomIndex])
        }
        // shuffle options
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
                    className={`w-full rounded-xl p-12 border-4 quick-transition ${
                        selectedOption === option
                            ? "border-action bg-accent"
                            : "border-white/40 bg-secondary/40 hover:border-white"
                    }`}
                    key={option}
                >
                    <input
                        type="radio"
                        id={option}
                        name="letter-option"
                        checked={selectedOption === option}
                        onChange={() => setSelectedOption(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                </button>
                ))}
            </div>
        </div>
    )
}

export default LetterOptionsGrid
