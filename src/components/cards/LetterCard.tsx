import { useQuiz } from "../../hooks/useQuiz"
import type { ArabicLetter } from "../../utils/arabicLetters"

interface LetterCardProps {
    letter: ArabicLetter | null
    onClick?: ((letter: ArabicLetter | null) => void) | null
    single?: boolean
    inQuiz?: boolean
    selectedOption?: ArabicLetter | null
}

const LetterCard = ({ letter, onClick, single, inQuiz, selectedOption }: LetterCardProps) => {
    const { handleClickAudio } = useQuiz()

    const handleClick = () => {
        if (!inQuiz) handleClickAudio(letter)
        if (onClick) onClick(letter)
    }

    const content = (
        <div
            className={`bg-accent rounded-xl p-4 lg:p-8 xl:p-12 flex items-center justify-center lg:h-[220px] base-transition border-5 ${
                single
                    ? "h-[200px]"
                    : "h-[100px] md:h-[150px] hover:shadow-md hover:-translate-y-4.5"
            }  ${inQuiz && (letter === selectedOption) ? "border-action" : "border-transparent"}`}
        >
            <div
                className={`w-[90%] lg:w-full max-w-[200px] h-auto ${
                    single ? "" : "md:w-[60%]"
                }`}
            >
                <img
                    src={`/images/${letter}.png`}
                    alt={letter || "letter"}
                    className="size-full object-cover"
                />
            </div>
        </div>
    )
    return single ? (
        <div>{content}</div>
    ) : (
        <button onClick={handleClick} className={` quick-transition`}>
            {content}
        </button>
    )
}

export default LetterCard
