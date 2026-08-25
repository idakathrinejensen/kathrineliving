import { Link, useLocation } from "react-router-dom";
import { getLanguageFromPath } from "../routeMap";
import "./NotFound.css";

function NotFound() {
    const location = useLocation();
    const lang = getLanguageFromPath(location.pathname);

    const isEnglish = lang === "en";

    return (
        <div className="not-found-page">
            <div className="not-found-content">
                <p className="not-found-number">404</p>

                <h1>
                    {isEnglish ? "Page not found" : "Siden blev ikke fundet"}
                </h1>

                <p>
                    {isEnglish
                        ? "It looks like the page you're looking for doesn't exist."
                        : "Det ser ud til, at siden du leder efter ikke findes."}
                </p>

                <Link
                    to={isEnglish ? "/home" : "/"}
                    className="not-found-button"
                >
                    {isEnglish ? "Back to home" : "Tilbage til forsiden"}
                </Link>
            </div>
        </div>
    );
}

export default NotFound;