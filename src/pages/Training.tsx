import LetterCard from "../components/cards/LetterCard"
<<<<<<< HEAD
import LetterCardDetail from "../components/cards/LetterCardDetail"
import Modal from "../components/Modal"
import { ARABIC_LETTERS, type ArabicLetter } from "../utils/arabicLetters"
import { useState } from "react"

function Training() {
    const [selectedLetter, setSelectedLetter] = useState<ArabicLetter | null>(null)
=======
import Modal from "../components/Modal"
import { ARABIC_LETTERS } from "../utils/arabicLetters"
import { useState } from "react"

function Training() {
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
>>>>>>> f41826d9feb103a04bca853f45eb029dd579a986

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center">Entraînement</h1>
            <div className="flex items-center justify-center py-12 px-24 rounded-xl bg-secondary/40 w-fit mb-60">
                <p className="subtitle text-center">
                    Choisis une lettre pour en apprendre plus à son sujet.
                </p>
            </div>

            <div
                className="grid grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-12 xl:gap-24 w-full"
                style={{ direction: "rtl" }}
            >
                {[...ARABIC_LETTERS].map((letter) => (
                    <LetterCard
                        key={letter}
                        letter={letter}
                        onClick={() => setSelectedLetter(letter)}
                    />
                ))}
            </div>

            <Modal
                isOpen={!!selectedLetter}
                onClose={() => setSelectedLetter(null)}
            >
                {selectedLetter && <LetterCardDetail letter={selectedLetter} />}
            </Modal>
        </div>
    )
}

export default Training
