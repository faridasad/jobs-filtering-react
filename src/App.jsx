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
                  onClick={() => deleteFilter(index)}
                >
                  {filter}{" "}
                  <span>
                    <img src="./src/assets/images/icon-remove.svg" alt="a" />
                  </span>
                </li>
              ))}
            </ul>
            <button className="button-reset" onClick={() => setFilters([])}>
              Clear
            </button>
          </div>
        )}
        <div className="jobs">
          <ul className="jobs-list">
            <List items={items} handleClick={handleClick} filters={filters} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;