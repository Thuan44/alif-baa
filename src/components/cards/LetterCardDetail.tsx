import type { ArabicLetter } from "../../utils/arabicLetters"

const LetterCardDetail = ({ letter }: { letter: ArabicLetter }) => {
    return (
        <div className="bg-accent rounded-xl p-32 flex flex-col items-center justify-center w-[95vw] max-w-[700px] h-[500px]">
            <div className="w-[90%] md:w-[60%] lg:w-full max-w-[200px] h-auto">
                <img
                    src={`/images/${letter}.png`}
                    alt={letter}
                    className="size-full object-cover"
                />
            </div>
        </div>
    )
}

export default LetterCardDetail
