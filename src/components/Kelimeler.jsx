import { Kelime } from "./Kelime";
import "./Kelimeler.css";
import { LoginErrorPage } from "./LoginErrorPage";

export const Kelimeler = ({ addedWord, username, finishedWords }) => {
  const finishedArea = document.querySelector(".finished-area");
  console.log(finishedArea);
  if (!username) {
    return <LoginErrorPage />;
  } else {
    if (addedWord.length > 0) {
      return (
        <div className="table">
          <h2 className="table-header">Bütün Kelimeler</h2>
          <table className="word-table">
            <thead className="head">
              <tr>
                <th>Kelime</th>
                <th>Cümle</th>
                <th>Kategori</th>
                <th>Eklenilen Gün</th>
                <th>Eklenilen Ay</th>
                <th>Eklenilen Yıl</th>
              </tr>
            </thead>
            <tbody>
              {addedWord.map((word) => (
                <Kelime key={word.word} word={word} />
              ))}
            </tbody>
          </table>

          <div className="finished-area">
            <h2 className="table-header">Bitmiş Kelimeler</h2>
            {finishedWords.length > 0 ? (
              <table className="word-table">
                <thead className="head">
                  <tr>
                    <th>Kelime</th>
                    <th>Cümle</th>
                    <th>Kategori</th>
                    <th>Eklenilen Gün</th>
                    <th>Eklenilen Ay</th>
                    <th>Eklenilen Yıl</th>
                  </tr>
                </thead>
                <tbody>
                  {finishedWords.map((word) => (
                    <Kelime key={word.word} word={word} />
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Gösterilecek kelime yok.</p>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="div-outlet">
          <h3>Gösterilecek kelime yok.</h3>
        </div>
      );
    }
  }
};
