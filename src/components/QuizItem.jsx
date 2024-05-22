import "./QuizItem.css";

const QuizItem = ({ word, addedWord, finishedWords, setFinishedWords }) => {
  function handleSubmit(e) {
    e.preventDefault();

    const formInput = e.target.children[2];
    const formWrong = e.target.children[3];
    const formButton = e.target.children[4];

    if (formInput.value.length > 0) {
      formInput.disabled = true;
      formButton.disabled = true;
      if (
        word.translate.toLowerCase().trim() ===
        formInput.value.toLowerCase().trim()
      ) {
        formInput.style.color = "green";
        word.theKnownCount++;
      } else {
        formInput.style.color = "crimson";
        word.theKnownCount = 0;
      }
      check(word);
    } else {
      formWrong.style.display = "block";
    }
  }

  function check(word) {
    const date = new Date();
    switch (word.theKnownCount) {
      case 0:
        word.theKnownCount = 0;
        word.theShownDay = date.getDate() + 1;
        checkTheDay(word.theShownDay);
        break;
      case 1:
        word.theShownDay = date.getDate() + 1;
        checkTheDay(word.theShownDay);
        break;
      case 2:
        word.theShownDay = date.getDate() + 7;
        checkTheDay(word.theShownDay);
        break;
      case 3:
        word.theShownMonth = date.getMonth() + 1;
        checkTheMonth(word.theShownMonth);
        break;
      case 4:
        word.theShownMonth = date.getMonth() + 7;
        checkTheMonth(word.theShownMonth);
        break;
      case 5:
        word.theShownYear = date.getUTCFullYear + 1;
        break;
      case 6:
        word.theShownYear = 0;
        setFinishedWords([...finishedWords, word]);
        break;
    }
    localStorage.setItem("words", JSON.stringify(addedWord));
  }

  function checkTheDay(number) {
    if (number > 30) {
      number -= 30;
    }
  }
  function checkTheMonth(number) {
    if (number > 12) {
      number -= 12;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-quiz">
      <div className="image-area">
        <img src={word.imageURL} alt={word.word} />
      </div>
      <p className="quiz-word">{word.word}</p>
      <input
        type="text"
        className="submit-input"
        placeholder="Cevabınızı giriniz"
      />
      <p className="wrong-quiz">Lütfen bir kelime giriniz.</p>
      <button type="submit" className="submit-quiz">
        Gönder
      </button>
    </form>
  );
};

export default QuizItem;
