import { useParams } from "react-router-dom";
import { Film } from "../shared/ListOfFilms";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import React from "react";

export default function Detail() {
    const { theme, toggle, dark } = useContext(ThemeContext);

    const themeStyle = {
        backgroundColor: theme.backgroundColor,
        color: theme.color,
    };

    const userName = useParams();
    const film = Film.find((film) => {
        return film.id == userName.id;
    });
    const textLeftStyle = { textAlign: "left" };
    const imageStyle = {
        width: "150%",
        height: "auto",
    };
    const videoStyle = {
        position: "relative",
        top: "10px",
    };
    return (
        <div style={themeStyle}>
            <div className="container pt-3 pb-3" style={themeStyle}>
                <div className="row">
                    <div className="col-md-3 img-detail">
                        <img src={film.image} alt="" style={imageStyle} />
                    </div>
                    <div className="detail col-md-7" style={textLeftStyle}>
                        <h4 className="title">
                            <b>{film.title}</b>
                        </h4>
                        <hr />
                        <h6 className="nation">
                            <b>Nation: </b>
                            {film.nation}
                        </h6>
                        <h6 className="year">
                            <b>Year: </b>
                            {film.year}
                        </h6>
                        <p className="info">{film.info}</p>
                        <div className="video"  style={videoStyle}>
                        <h6 className="trailer"><b>Trailer: </b></h6>
                            <iframe
                                title="Trailer"
                                width="100%"
                                height="400px"
                                src={film.trailer}
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}