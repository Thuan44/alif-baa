import type { ArabicLetter } from "../../utils/arabicLetters"

let currentAudio: HTMLAudioElement | null = null

const LetterCard = ({ letter }: { letter: ArabicLetter }) => {
    const handleClick = () => {
        if (currentAudio) {
            currentAudio.pause()
            currentAudio.currentTime = 0
        }
        const audio = new Audio(`/audios/${letter}.wav`)
        currentAudio = audio
        audio.play()
    }
    return (
        <button onClick={handleClick}>
            <div className="bg-accent rounded-xl p-4 lg:p-8 xl:p-20 flex items-center justify-center h-[100px] md:h-[150px] lg:h-[220px] base-transition hover:shadow-md hover:-translate-y-4.5">
                <div className="w-[90%] md:w-[60%] lg:w-[80%] xl:w-[88%] h-full">
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
