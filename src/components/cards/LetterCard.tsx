import type { ArabicLetter } from "../../utils/arabicLetters"

let currentAudio: HTMLAudioElement | null = null

interface LetterCardProps {
    letter: ArabicLetter | null;
    onClick?: () => void;
    single?: boolean;
}

const LetterCard = ({ letter, onClick, single }: LetterCardProps) => {
    const handleClick = () => {
        if (currentAudio) {
            currentAudio.pause()
            currentAudio.currentTime = 0
        }
        const audio = new Audio(`/audios/${letter}.wav`)
        currentAudio = audio
        audio.play()
        if (onClick) onClick()
    }
    return (
        <button onClick={single ? undefined : handleClick} className={single ? '!cursor-default' : ''}>
            <div className={`bg-accent rounded-xl p-4 lg:p-8 xl:p-12 flex items-center justify-center lg:h-[220px] base-transition ${single ? "h-[200px]" : "h-[100px] md:h-[150px] hover:shadow-md hover:-translate-y-4.5"}`}>
                <div className={`w-[90%] lg:w-full max-w-[200px] h-auto ${single ? "" : "md:w-[60%]"}`}>
                    <img
                        src={`/images/${letter}.png`}
                        alt={letter}
                        className="size-full object-cover"
                    />
                </div>
            </div>
        </button>
    )
}

export default LetterCard
