import LetterCard from "../components/cards/LetterCard"
import LetterCardDetail from "../components/cards/LetterDetailCard"
import Modal from "../components/Modal"
import { ARABIC_LETTERS, type ArabicLetter } from "../utils/arabicLetters"
import { useState } from "react"

function Training() {
    const [selectedLetter, setSelectedLetter] = useState<ArabicLetter | null>(
        null
    )

    return (
        <>
            <title>Alif Baa – Mode Entraînement</title>
            <meta
                name="description"
                content="Exerce-toi à reconnaître et écrire les lettres arabes avec le mode Entraînement d'Alif Baa."
            />
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
                    {selectedLetter && (
                        <LetterCardDetail
                            letter={selectedLetter}
                            onClose={() => setSelectedLetter(null)}
                        />
                    )}
                </Modal>
            </div>
        </>
    )
}

export default Training
