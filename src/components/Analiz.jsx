import { Link } from "react-router-dom";
import "./Analiz.css";
import { LoginErrorPage } from "./LoginErrorPage";

export const Analiz = ({ addedWord, username }) => {
  let allCorrectCount = 0;
  let general = 0;
  let science = 0;
  let religion = 0;
  let sport = 0;

  addedWord.map((word) => {
    allCorrectCount += word.theKnownCount;
    switch (word.category) {
      case "Bilim":
        science += word.theKnownCount;
        break;
      case "Genel":
        general += word.theKnownCount;
        break;
      case "Dini":
        religion += word.theKnownCount;
        break;
      case "Spor":
        sport += word.theKnownCount;
        break;
    }
  });

  function formPrint() {
    window.print();
  }

  if (username) {
    if (addedWord.length > 0) {
      return (
        <div className="page">
          <Link to="/" className="">
            Ana Sayfa
          </Link>
          <h1 className="header">Analiz</h1>
          <div className="analysis-div">
            <table className="analysis-table">
              <thead>
                <th>Konu</th>
                <th>Toplam Doğru Sayısı</th>
                <th>Yüzdesel</th>
              </thead>
              <tbody>
                <tr>
                  <td>Genel</td>
                  <td>{general}</td>
                  <td>{((general / allCorrectCount) * 100).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Bilim</td>
                  <td>{science}</td>
                  <td>{((science / allCorrectCount) * 100).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Spor</td>
                  <td>{sport}</td>
                  <td>{((sport / allCorrectCount) * 100).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Dini</td>
                  <td>{religion}</td>
                  <td>{((religion / allCorrectCount) * 100).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="print-btn"
              onClick={() => {
                formPrint();
              }}
            >
              Yazdır
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="div-outlet">
          <Link to="/" className="">
            Ana Sayfa
          </Link>
          <h3>Gösterilecek kelime yok.</h3>
        </div>
      );
    }
  } else {
    return <LoginErrorPage />;
  }
};
