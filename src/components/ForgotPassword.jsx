import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = ({ users, setUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (username.length > 0 && password.length > 0 && email.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  function handleSubmit(e) {
    e.preventDefault();

    users.map((user) => {
      if (username.length > 0 && password.length > 0 && email.length > 0) {
        if (user.username === username && user.email === email) {
          user.password = password;
          setUsers([...users]);
          setTimeout(() => {
            navigate("/login");
          }, 1);
        }
      }
    });
    document.querySelector(".wrong").style.display = "block";
  }

  return (
    <div className="div-outlet">
      <div className="formDiv">
        <h1 className="loginpage">Şifremi Unuttum</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="textInput"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Kullanıcı Adı"
          />

          <input
            type="email"
            className="textInput"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            className="textInput"
            placeholder="Yeni Şifre"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <p className="wrong">Lütfen kullanıcı adınızı yada parolanızı kontrol ediniz.</p>

          <button type="submit" id="btn-forgot">
            Şifremi Değiştir
          </button>
        </form>
      </div>
    </div>
  );
};
