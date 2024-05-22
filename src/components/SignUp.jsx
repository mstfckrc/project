import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SignUp = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (username.length > 0 && password.length > 0 && email.length > 0) {
      setUsers([
        ...users,
        { username: username, password: password, email: email },
      ]);
      setTimeout(() => {
        navigate("/login");
      }, 1);
    }
  }

  useEffect(() => {
    if (username.length > 0 && password.length > 0 && email.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  return (
    <div className="div-outlet">
      <div className="formDiv">
        <h1 className="loginpage">Kayıt Ol</h1>
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
            type="password"
            className="textInput"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Şifre"
          />

          <input
            type="email"
            className="textInput"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button type="submit" id="btn-signup">
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
};
