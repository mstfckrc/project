import { useEffect, useState } from "react";
import { LoginErrorPage } from "./LoginErrorPage";
import QuizItem from "./QuizItem";
import "./Quiz.css";

export const Quiz = ({
  username,
  addedWord,
  finishedWords,
  setFinishedWords,
}) => {
  const [howMuch, setHowMuch] = useState(10);

  let showedWords = [];
  const date = new Date();
  const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getUTCFullYear(),
  ];

  addedWord.map((word) => {
    if (
      word.theShownYear != 0 &&
      word.theShownDay - day <= 0 &&
      word.theShownMonth - month <= 0 &&
      word.theShownYear - year <= 0
    ) {
      showedWords.push(word);
      showedWords.sort((a, b) => b.theKnownCount - a.theKnownCount);
    }
  });

  useEffect(() => {
    if (finishedWords.length > 0) {
      localStorage.setItem("finishedWords", JSON.stringify(finishedWords));
    }
  }, [finishedWords]);

  if (username) {
    if (showedWords.length > 0) {
      let count = 0;
      return (
        <div>
          <div className="quiz-header">
            <h1 className="header">Quiz Area</h1>
            <div className="change-area">
              <label htmlFor="number-input">Toplam Soru Miktarı : </label>
              <input
                type="number"
                name="number-input"
                placeholder="Bir sayı giriniz"
                value={howMuch}
                onChange={(e) => {
                  setHowMuch(e.target.value);
                }}
              />
            </div>
          </div>
          {showedWords.map((word) => {
            if (count < howMuch) {
              count++;
              return (
                <QuizItem
                  key={word.word}
                  word={word}
                  addedWord={addedWord}
                  finishedWords={finishedWords}
                  setFinishedWords={setFinishedWords}
                />
              );
            }
          })}
        </div>
      );
    } else {
      return (
        <div className="div-outlet">
          <h3 className="header">Tebrikler! Bugün gösterilecek soru yok.</h3>
        </div>
      );
    }
  } else {
    return <LoginErrorPage />;
  }
};
