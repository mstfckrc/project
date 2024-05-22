import { useState } from "react";
import "./LoginPages.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ setUsername, users }) => {
  const [logInName, setLogInName] = useState();
  const [logInPassword, setLogInPassword] = useState();

  const navigate = useNavigate();

  function check(e) {
    e.preventDefault();
    users.map((user) => {
      if (user.username === logInName && user.password === logInPassword) {
        setUsername(logInName);
        setLogInName("");
        setLogInPassword("");
        navigate("/");
      }
    });

    setLogInName("");
    setLogInPassword("");
    document.querySelector(".wrong").style.display = "block";
  }

  return (
    <div className="div-outlet">
      <div className="formDiv">
        <h1 className="loginpage">Giriş Yap</h1>
        <form onSubmit={check} className="form">
          <input
            type="text"
            className="textInput"
            value={logInName}
            placeholder="Kullanıcı Adı"
            onChange={(e) => {
              setLogInName(e.target.value);
            }}
          />
          <input
            type="password"
            className="textInput"
            value={logInPassword}
            placeholder="Şifre"
            onChange={(e) => {
              setLogInPassword(e.target.value);
            }}
          />

          <p className="wrong">Lütfen kullanıcı adınızı yada parolanızı kontrol ediniz.</p>

          <button type="submit" className="submitButton">
            Giriş Yap
          </button>
          <div className="button-wrapper">
            <Link to="/sign-up" className="add-btn">
              Kayıt Ol
            </Link>
            <Link to="/forgot-password" className="add-btn">
              Şifremi Unuttum
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
