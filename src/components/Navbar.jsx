import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = ({ username, setUsername }) => {
  const handleClick = () => {
    setUsername(null);
  };
  return (
    <div className="nav-div">
      <h1 className="header">Kelime Ezberleme Modülü</h1>
      <nav className="navbar">
        <div>
          <NavLink to="/" className="btn-link">
            <span>
              <FontAwesomeIcon icon={faHouse} /> Ana Sayfa
            </span>
          </NavLink>
          <NavLink to="kelimeekle" className="btn-link">
            Kelime Ekle
          </NavLink>
          <NavLink to="kelimeler" className="btn-link">
            Kelimeler
          </NavLink>
          <NavLink to="quiz" className="btn-link">
            Sınav
          </NavLink>
          <NavLink to="analiz" className="btn-link">
            Analiz
          </NavLink>
        </div>
        {username ? (
          <div className="username-area">
            <button className="btn-link" id="btn-user">
              <span>
                <FontAwesomeIcon icon={faUser} /> {username}
              </span>
            </button>
            <button
              className="logout-btn btn-link"
              onClick={() => {
                handleClick();
              }}
            >
              Çıkış Yap
            </button>
          </div>
        ) : (
          <div>
            <NavLink to="/login" className="btn-link">
              Giriş Yap
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};
