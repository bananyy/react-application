import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <a
        href="https://milton-template.webflow.io/posts/coffee-variety-macchiato-as-organic-ut-variety-caffeine-americano"
        className="card-image"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></a>
      <div className="div-title">
        <div className="card-title">{props.title}</div>
        <div className="card-description">{props.description}</div>
        <div className="card-date-section">
          <span className="date">{props.date} |</span>
          <a href="/categories/travel" className="date tag">
            {props.tag}{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
