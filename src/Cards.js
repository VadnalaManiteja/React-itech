import React from "react";
import "./Cards.css"; // Import the CSS file

function Cards() {
  return (
    <div className="cards-container">
      {["Card 1", "Card 2", "Card 3", "Card 4"].map((title, index) => (
        <div key={index} className="card">
          <h3>{title}</h3>
          <p>This is the description for {title}. Download the content below.</p>
          <button className="card-button">Download</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
