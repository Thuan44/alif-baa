import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faChartSimple,
    faHouse,
    faLeftLong,
} from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isHome = location.pathname === "/"

    return (
        <nav className="flex justify-between items-center p-32 bg-primary">
            {!isHome && (
                <button
                    className="btn-action"
                    onClick={() => navigate(-1)}
                    aria-label="Retour à la page précédente"
                >
                    <FontAwesomeIcon icon={faLeftLong} />
                </button>
            )}

            {!isHome && (
                <Link to="/" className="base-transition hover:scale-115">
                    <FontAwesomeIcon
                        icon={faHouse}
                        className="text-white text-32"
                    />
                </Link>
            )}

            <button
                className={`btn-action ${isHome ? "ml-auto" : ""}`}
                aria-label="Afficher les statistiques"
            >
                <FontAwesomeIcon icon={faChartSimple} />
            </button>
        </nav>
    )
}

export default Navbar
