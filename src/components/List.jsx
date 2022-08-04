import React from "react";

function List({ items, handleClick, filters }) {
  items.forEach((item) => {
    item.filterList = [item.level, item.role, ...item.languages, ...item.tools];
  });

  const filteredItems = items.filter((item) =>
    filters.every((el) => item.filterList.includes(el))
  );

  return (
    <>
      {filteredItems.map((item) => (
        <li
          key={item.id}
          className={"jobs-list-item " + (item.featured && "featured")}
        >
          <div className="left">
            <img src={item.logo} alt={item.company} />
            <div className="details">
              <div className="details-header">
                <p className="company">{item.company}</p>
                {item.new && <span className="badge badge-primary">NEW!</span>}
                {item.featured && (
                  <span className="badge badge-secondary">FEATURED</span>
                )}
              </div>
              <p className="position">{item.position}</p>
              <div className="alt-texts">
                <p className="posted-at">{item.postedAt}</p>
                <p className="contract">{item.contract}</p>
                <p className="location">{item.location}</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="tags">
              <p className="tag" onClick={() => handleClick(item.role)}>
                {item.role}
              </p>
              <p className="tag" onClick={() => handleClick(item.level)}>
                {item.level}
              </p>
              {item.languages.map((tag, index) => (
                <p className="tag" key={index} onClick={() => handleClick(tag)}>
                  {tag}
                </p>
              ))}
              {item.tools.map((tag, index) => (
                <p className="tag" key={index} onClick={() => handleClick(tag)}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default List;
