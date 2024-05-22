import { Link, NavLink } from "react-router-dom";
import Card from "./Card";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="homePage">
      <div className="card-wrapper">
        <div className="card-link">
          <img
            src="https://source.unsplash.com/cropped-shot-of-young-secretary-woman-in-white-striped-shirt-sitting-at-the-wooden-desk-and-writing-on-the-notebooktaking-notes-0EmNLYxPDbs"
            className="bg-image"
          />
          <NavLink to="/kelimeekle" className="link">
            <Card
              name="Kelime Ekle"
              description="Kelime ekleme modülü ile öğrenmek istediğiniz kelimeleri ekleyebilirsiniz."
            />
          </NavLink>
        </div>
        <div className="card-link">
          <img
            src="https://source.unsplash.com/pen-near-black-lined-paper-and-eyeglasses-q10VITrVYUM"
            className="bg-image"
          />
          <NavLink to="kelimeler" className="link">
            <Card
              name="Kelimeleri Görüntüle"
              description="Eklediğiniz kelimeleri görüntüleyebileceğiniz bir yer."
            />
          </NavLink>
        </div>
        <div className="card-link">
          <img
            src="https://source.unsplash.com/flat-lay-photo-of-gold-apple-watch-clear-eyeglasses-and-pens-Bg3qkPDpopY"
            className="bg-image"
          />
          <NavLink to="/quiz" className="link">
            <Card
              name="Sınav"
              description="Eklediğiniz kelimelerle ilgili bir sınav."
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
