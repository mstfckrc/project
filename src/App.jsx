import { Homepage } from "./components/Homepage";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Quiz } from "./components/Quiz";
import { KelimeEkle } from "./components/KelimeEkle";
import { Kelimeler } from "./components/Kelimeler";
import { useEffect, useState } from "react";
import { SignUp } from "./components/SignUp";
import { ForgotPassword } from "./components/ForgotPassword";
import { Analiz } from "./components/Analiz";

function App() {
  const [username, setUsername] = useState(null);
  const [users, setUsers] = useState([]);
  const [addedWord, setAddedWord] = useState([]);
  const [finishedWords, setFinishedWords] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("users")) {
      setUsers(JSON.parse(localStorage.getItem("users")));
    }

    if (localStorage.getItem("words")) {
      setAddedWord(JSON.parse(localStorage.getItem("words")));
    }
    if (localStorage.getItem("finishedWords")) {
      setFinishedWords(JSON.parse(localStorage.getItem("finishedWords")));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout username={username} setUsername={setUsername} />}
        >
          <Route index element={<Homepage />} />
          <Route
            path="quiz"
            element={
              <Quiz
                username={username}
                addedWord={addedWord}
                finishedWords={finishedWords}
                setFinishedWords={setFinishedWords}
              />
            }
          />
          <Route
            path="kelimeekle"
            element={
              <KelimeEkle
                addedWord={addedWord}
                setAddedWord={setAddedWord}
                username={username}
              />
            }
          />
          <Route
            path="kelimeler"
            element={
              <Kelimeler
                addedWord={addedWord}
                username={username}
                finishedWords={finishedWords}
              />
            }
          />
          <Route
            path="login"
            element={<Login setUsername={setUsername} users={users} />}
          />
          <Route
            path="sign-up"
            element={<SignUp users={users} setUsers={setUsers} />}
          />
          <Route
            path="forgot-password"
            element={<ForgotPassword users={users} setUsers={setUsers} />}
          />
        </Route>
        <Route
          path="analiz"
          element={<Analiz addedWord={addedWord} username={username} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
