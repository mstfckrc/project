import { useEffect, useState } from "react";
import "./KelimeEkle.css";
import { LoginErrorPage } from "./LoginErrorPage";

export const KelimeEkle = ({ addedWord, setAddedWord, username }) => {
  const [word, setWord] = useState("");
  const [translate, setTranslate] = useState("");
  const [sentence, setSentence] = useState("");
  const [imageURL, setImageURL] = useState("");

  function check(e) {
    e.preventDefault();
    const date = new Date();
    const category = document.querySelector("#category").value;

    const [day, month, year] = [
      date.getDate(),
      date.getMonth() + 1,
      date.getUTCFullYear(),
    ];
    if (
      word.length > 0 &&
      translate.length > 0 &&
      sentence.length > 0 &&
      imageURL.length > 0
    ) {
      setAddedWord([
        ...addedWord,
        {
          word,
          translate,
          sentence,
          imageURL,
          day,
          month,
          year,
          theKnownCount: 0,
          theShownDay: day,
          theShownMonth: month,
          theShownYear: year,
          category,
        },
      ]);
      document.querySelector(".addword-correct").style.display = "block";
      document.querySelector(".addword-wrong").style.display = "none";
    } else {
      document.querySelector(".addword-wrong").style.display = "block";
      document.querySelector(".addword-correct").style.display = "none";
    }
  }

  useEffect(() => {
    if (
      (word.length > 0 && translate.length > 0 && sentence.length > 0,
      imageURL.length > 0)
    ) {
      localStorage.setItem("words", JSON.stringify(addedWord));
    }
  }, [addedWord]);

  if (!username) {
    return <LoginErrorPage />;
  } else {
    return (
      <div className="div-outlet">
        <div className="form-div">
          <h1 className="header">Kelime Ekle</h1>
          <form onSubmit={check} className="add-form">
            <div className="word-area">
              <input
                type="text"
                className="add-word input"
                placeholder="Eklenecek Kelime"
                onChange={(e) => {
                  setWord(e.target.value);
                }}
              />
              <input
                type="text"
                className="translate input"
                placeholder="Türkçesi"
                onChange={(e) => {
                  setTranslate(e.target.value);
                }}
              />
            </div>
            <textarea
              cols="30"
              rows="4"
              placeholder="Örnek Cümle"
              className="sentence"
              onChange={(e) => {
                setSentence(e.target.value);
              }}
            ></textarea>
            <div className="btn-area">
              <input
                type="text"
                className="text-image"
                placeholder="Resim URL'si"
                onChange={(e) => {
                  setImageURL(e.target.value);
                }}
              />
              <div className="category-area">
                <label htmlFor="category">Lütfen bir kategori seçiniz : </label>
                <select name="category" id="category">
                  <option defaultValue={"Genel"} value="Genel">
                    Genel
                  </option>
                  <option value="Spor">Spor</option>
                  <option value="Bilim">Bilim</option>
                  <option value="Dini">Dini</option>
                </select>
              </div>
              <p className="addword-correct">Kelime başarıyla eklendi...</p>
              <p className="addword-wrong">Lütfen bir kelime giriniz...</p>
              <button type="submit" className="submit-btn">
                Kelimeyi Ekle
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};
