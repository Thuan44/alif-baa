import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartSimple, faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === "/";

    return (
        <nav className="flex justify-between p-32 bg-primary">
            {!isHome && (
                <button className="btn-action" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faLeftLong} />
                </button>
            )}
            <button className="btn-action ml-auto">
                <FontAwesomeIcon icon={faChartSimple} />
            </button>
        </nav>
    );
}

export default Navbar;
