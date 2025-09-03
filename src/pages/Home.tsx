import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import BaseCard from "../components/cards/BaseCard"

const Home = () => {
    return (
        <div className="mx-auto flex flex-col items-center">
            <h1 className="text-center">Alif Baa</h1>
            <div className="flex items-center justify-center py-12 px-24 rounded-xl bg-secondary/40 w-fit mb-60">
                <p className="subtitle text-center">
                    Apprends, pratique, excelle.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40">
                <BaseCard
                    title="Entraînement"
                    text="Entraîne-toi et deviens plus fort."
                    icon={<FontAwesomeIcon icon={faDumbbell} className="text-56 text-accent" />}
                    link="/entrainement"
                />
                <BaseCard
                    title="Quizz"
                    text="Teste tes connaissances et améliore tes compétences."
                    icon={<FontAwesomeIcon icon={faLightbulb} className="text-56 text-accent" />}
                    link="/quizz"
                />
            </div>
        </div>
    )
}

export default Home
