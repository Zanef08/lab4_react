import React, { useContext, useState } from "react";
import { Film } from "../shared/ListOfFilms";
import { ThemeContext } from "./ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


function Films() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  const [film, setFilm] = useState([]);

  const changebody = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  };
  const changePop = {
    backgroundColor: theme.popupBackground,
    color: theme.colorpopup,
  };
  const openPopup = (film) => {
    setFilm(film);
  };
  return (
    <div style={changebody}>
      <div style={{ position: 'absolute', top: '55px', right: '20px' }}>
        <a className="switch-mode" href="#" onClick={toggle} style={{ backgroundColor: theme.backgroundColor, color: theme.color, outline: 'none' }} data-testid="toggle-theme-btn">
          <FontAwesomeIcon icon={dark ? faSun : faMoon} style={{ color: dark ? '#ffffff' : '#000000', fontSize: '24px' }} />
        </a>
      </div>

      <h2>List of Films</h2> {" "}
      <hr></hr>

      <div className="row"> {Film.map((film) => (
        <div className="col-md-4 film-card" id={film.id}>
          <img className="film-image" src={film.image} alt="" />
          <a href='#popup1' onClick={() => openPopup(film)} style={changebody}><h3 className="film-title">{film.title}</h3></a>
          <p className="film-year">{film.year}</p>
          <p className="film-nation">{film.nation}</p>
          <Link to={`detail/${film.id}`}>
            <p><button className="btn btn-primary">Detail</button></p>
          </Link>
        </div>
      ))}
        <div id="popup1" className="overlay" >
          <div className="popup" style={changePop}>
            <img className="film-image" src={film.image} alt="" />
            <div class="film-details">
              <h3 className="film-title">{film.title}</h3>
              <p className="film-year">{film.year}</p>
              <p className="film-nation">{film.nation}</p>
              <a className="close" href="#">X</a>
              <div className="info">
                {film.info}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
export default Films;