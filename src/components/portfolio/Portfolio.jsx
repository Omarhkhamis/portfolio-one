import React, { useState } from "react";
import "./portfolio.css";
import List from "./List";

function Portfolio() {
  const [items, setItems] = useState(List);

  const filterItems = (categoryItems) => {
    const updatedItems = List.filter((curElement) => {
      return curElement.category === categoryItems;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(List)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItems("Creative")}>
          Creative
        </span>
        <span className="work__item" onClick={() => filterItems("Art")}>
          Art
        </span>
        <span className="work__item" onClick={() => filterItems("Design")}>
          Design
        </span>
        <span className="work__item" onClick={() => filterItems("Branding")}>
          Branding
        </span>
      </div>

      <div className="work__container grid">
        {items.map((ele) => {
          const { id, image, title, category } = ele;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img"></img>
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
