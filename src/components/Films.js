import React from "react";
import { Film } from "../shared/ListOfFilms";

function Films() {
  // const [film, setFilm] = useState([]);
  return (
    <div className="container">
      <h2>List of Films</h2> {" "}
      <hr></hr>

      <div className="row"> {Film.map((film) => (
        <div className="col-md-4 film-card" id={film.id}>
          <img className="film-image" src={film.image} alt="" />
          <h3 className="film-title">{film.title}</h3>
          <p className="film-year">{film.year}</p>
          <p className="film-nation">{film.nation}</p>
          <p className="film-button">
            {/* <a href="#popup1" id="openPopUp"><button className="btn btn-success" onClick={() => { setFilm(film); }}>Watch</button></a> */}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
}
export default Films;