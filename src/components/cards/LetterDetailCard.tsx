import { faEye, faVolumeHigh, faXmark } from "@fortawesome/free-solid-svg-icons"
import type { ArabicLetter } from "../../utils/arabicLetters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"


const LetterCardDetail = ({ letter, onClose }: { letter: ArabicLetter, onClose: () => void }) => {
    const [showTransliteration, setShowTransliteration] = useState(false)
    let currentAudio: HTMLAudioElement | null = null

    const handleClickAudio = () => {
        if (currentAudio) {
            currentAudio.pause()
            currentAudio.currentTime = 0
        }
        const audio = new Audio(`/audios/${letter}.wav`)
        currentAudio = audio
        audio.play()
    }

    return (
        <div className="relative bg-accent rounded-xl p-32 flex flex-col items-center justify-center gap-24 w-[95vw] max-w-[700px] h-[500px]">
            <button 
                className="absolute top-16 right-16 text-black/50 text-20 base-transition hover:text-black" 
                onClick={onClose}
                aria-label="Fermer la fenêtre de détail de la lettre"
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="w-full max-w-[300px] h-auto">
                <img
                    src={`/images/${letter}.png`}
                    alt={letter}
                    className="size-full object-cover"
                />
            </div>
            <div
                className={`text-20 -mt-24 mb-8 slow-transition ${showTransliteration ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
                {letter}    
            </div>
            <div className="flex items-center gap-24">
                <button
                    className={`btn-action w-[80px] ${showTransliteration ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}`}
                    onClick={() => setShowTransliteration(true)}
                    disabled={showTransliteration}
                    aria-label="Afficher la translittération"
                >
                    <FontAwesomeIcon icon={faEye} />
                </button>
                <button
                    className="btn-action w-[80px]"
                    onClick={handleClickAudio}
                    aria-label="Lire le son de la lettre"
                >
                    <FontAwesomeIcon icon={faVolumeHigh} />
                </button>
            </div>
        </div>
    )
}

export default LetterCardDetail
