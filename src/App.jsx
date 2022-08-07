import { useState, useRef } from "react";
import "./App.scss";
import List from "./components/List";
import data from "./data/data.json";

function App() {
  const [items, setItems] = useState(data);
  const [filters, setFilters] = useState([]);

  const handleClick = (tag) => {
    !filters.includes(tag) && setFilters((filters) => [tag, ...filters]);
  };
  const deleteFilter = (i) => {
    setFilters(filters.filter((filter, index) => index !== i));
  };

  return (
    <div className="main">
      <div className="header"></div>
      <div className="container">
        {filters.length > 0 && (
          <div className="filter-wrapper">
            <ul>
              {filters?.map((filter, index) => (
                <li
                  key={index}
                  className="filter-item"
                >
                  {filter}{" "}
                  <span onClick={() => deleteFilter(index)}>
                    <img src="./src/images/icon-remove.svg" alt="a" />
                  </span>
                </li>
              ))}
            </ul>
            <button className="button-reset" onClick={() => setFilters([])}>
              Clear
            </button>
          </div>
        )}
        <div className={"jobs " + (filters.length > 0 && "filter-active")}>
          <ul className="jobs-list">
            <List items={items} handleClick={handleClick} filters={filters} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
