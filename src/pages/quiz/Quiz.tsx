import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BaseCard from "../../components/cards/BaseCard"
import { faEarListen, faEye } from "@fortawesome/free-solid-svg-icons"

function Quiz() {
    return (
        <>
                <title>Alif Baa – Quiz</title>
                <meta
                    name="description"
                    content="Teste tes connaissances en lettres arabes avec les quiz interactifs Alif Baa. Mode Visuel et Audio disponibles."
                ></meta>
            <div className="flex flex-col items-center">
                <h1 className="text-center">Quizz</h1>
                <div className="flex items-center justify-center py-12 px-24 rounded-xl bg-secondary/40 w-fit mb-60">
                    <p className="subtitle text-center">
                        Choisis un mode et teste tes connaissances.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40">
                    <BaseCard
                        title="Mode visuel"
                        text="Observe la lettre et choisis la bonne réponse."
                        icon={
                            <FontAwesomeIcon
                                icon={faEye}
                                className="text-56 text-accent"
                            />
                        }
                        link="/quizz-visuel"
                    />
                    <BaseCard
                        title="Mode audio"
                        text="Écoute le son et choisis la bonne lettre."
                        icon={
                            <FontAwesomeIcon
                                icon={faEarListen}
                                className="text-56 text-accent"
                            />
                        }
                        link="/quizz-audio"
                    />
                </div>
            </div>
        </>
    )
}

export default Quiz
