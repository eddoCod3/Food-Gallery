import { dishData } from "./dishdata";
import DishCardView from "./dishCardView";
import "./dish.css";

import { useState } from "react";
function DishCard() {
  const [items, setItems] = useState(dishData);

  function filterResults(searchPattern) {
    if (searchPattern === "") {
      setItems(dishData);
    } else {
      let newItems = filterItemsBySearchPattern(searchPattern);
      setItems(newItems);
    }
  }

  function filterItemsBySearchPattern(searchPattern) {
    let filterItems = dishData.map((items) =>
      items.toLowerCase().includes(searchPattern.toLowerCase()) ? items : null
    );
    return filterItems;
  }

  return (
    <>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Que quieres comer?"
          className="input input-bordered input-info w-full mx-4  max-w-xs"
          onChange={(ev) => filterResults(ev.target.value)}
        />

        <select className="select select-secondary   size_Dish">
          <option disabled selected>
            Escoje tu platillo
          </option>
          <option>Sopa/Caldo</option>
          <option>Tacos</option>
          <option>Tortas</option>
        </select>
      </div>
      <DishCardView elements={items} />
    </>
  );
}

export default DishCard;
