import React, { Component } from "react";
export default class Film extends Component {
    render() {
        return (
            <div className="container">
                <div className='column'>
                    <div className='card film-card' id="1">
                        <img className="film-image" src='assets/images/1.jpg' alt=""/>
                        <h3 className="film-title">Aladdin</h3>
                        <p className="film-year">2019</p>
                        <p className="film-nation">USA</p>
                        <p className="film-button"><button>Watch</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card film-card' id="2">
                        <img className="film-image" src='assets/images/2.jpg' alt=""/>
                        <h3 className="film-title">Frozen II</h3>
                        <p className="film-year">2019</p>
                        <p className="film-nation">USA</p>
                        <p className="film-button"><button>Watch</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card film-card' id="3">
                        <img className="film-image" src='assets/images/3.jpg' alt=""/>
                        <h3 className="film-title">Buzz Lightyear</h3>
                        <p className="film-year">2022</p>
                        <p className="film-nation">USA</p>
                        <p className="film-button"><button>Watch</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card film-card' id="4">
                        <img className="film-image" src='assets/images/4.jpg' alt=""/>
                        <h3 className="film-title">Spongebob</h3>
                        <p className="film-year">2020</p>
                        <p className="film-nation">USA</p>
                        <p className="film-button"><button>Watch</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card film-card' id="5">
                        <img className="film-image" src='assets/images/5.jpg' alt=""/>
                        <h3 className="film-title">The Parent Trap</h3>
                        <p className="film-year">1998</p>
                        <p className="film-nation">USA</p>
                        <p className="film-button"><button>Watch</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card film-card' id="6">
                        <img className="film-image" src='assets/images/6.jpg' alt=""/>
                        <h3 className="film-title">Haunted Mansion</h3>
                        <p className="film-year">2023</p>
                        <p className="film-nation">USA</p>
                        <p className="film-button"><button>Watch</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card film-card' id="7">
                        <img className="film-image" src='assets/images/7.jpg' alt=""/>
                        <h3 className="film-title">Beauty anf the Beast</h3>
                        <p className="film-year">2017</p>
                        <p className="film-nation">USA</p>
                        <p className="film-button"><button>Watch</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card film-card' id="8">
                        <img className="film-image" src='assets/images/8.jpg' alt=""/>
                        <h3 className="film-title">101 Dalmatians</h3>
                        <p className="film-year">1996</p>
                        <p className="film-nation">USA</p>
                        <p className="film-button"><button>Watch</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card film-card' id="9">
                        <img className="film-image" src='assets/images/9.jpg' alt=""/>
                        <h3 className="film-title">Zootopia</h3>
                        <p className="film-year">2016</p>
                        <p className="film-nation">USA</p>
                        <p className="film-button"><button>Watch</button></p>
                    </div>
                </div>
            </div>
        )
    }
}