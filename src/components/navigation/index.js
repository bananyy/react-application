import React from "react";
import './style.css';

function Navigation (){

return (
    <div className="navigation-container">
    <div className="header">
        <div className="main-title"><a className="milton" href="/">Milton</a></div>
        <div className="tiny"></div>
        <div className="title">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</div>
        <div className="tiny"></div>
        <div className="groups">
        <a className="main navlink" href="/">Home</a>
            <a className="navlink" href="/about">About</a>
            <a className="navlink" href="/contact">Contact</a>
        </div>
        <div className="tiny"></div>
        <div className="icons">
            <a className="social" href="#"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491addf265a8e_social-03.svg"></img></a>
            <a className="social" href="#"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491834e265b00_social-07.svg"></img></a>
            <a className="social" href="#"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491586a265ad4_social-18.svg"></img></a>
            <a className="social" href="#"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e4914f3a265ae5_social-09.svg"></img></a>
            <a className="social" href="/contact"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e4912fad265ab9_social-30.svg"></img></a>
            
        </div>
        <div className="under-text">
            <p className="parag">built with <a className="webflow"href="#">webflow</a></p>
        </div>
    </div>
    </div>
);
}

export default Navigation;

