import { Link } from "react-router-dom";
import "./LoginErrorPage.css";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoginErrorPage = () => {
  return (
    <div className="div-error">
      <h1 className="message-error">Lütfen Önce Kayıt Olun</h1>
      <Link to="/login" className="btn-login">
        <FontAwesomeIcon icon={faArrowCircleRight}/> Giriş sayfasına gitmek için tıklayınız
      </Link>
    </div>
  );
};
