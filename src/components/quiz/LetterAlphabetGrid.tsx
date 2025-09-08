import { ARABIC_LETTERS, type ArabicLetter } from "../../utils/arabicLetters"
import LetterCard from "../cards/LetterCard"

const LetterAlphabetGrid = ({selectedOption, handleSelectOption}: {selectedOption : ArabicLetter | null, handleSelectOption: (letter: ArabicLetter) => void }) => {
    return (
        <div
            className="grid grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-12 xl:gap-24 w-full"
            style={{ direction: "rtl" }}
        >
            {[...ARABIC_LETTERS].map((letter) => (
                <LetterCard
                    key={letter}
                    letter={letter}
                    onClick={selectedOption === null ? () => handleSelectOption(letter) : null}
                    inQuiz
                    selectedOption={selectedOption}
                />
            ))}
        </div>
    )
}

export default LetterAlphabetGrid
