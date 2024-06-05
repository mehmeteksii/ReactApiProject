import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function CategoryList(props) {
  const { currentCategory, handleClick } = props;
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setCategoriesData(data);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <h3>{props.info.title}</h3>
      <ListGroup>
        {categoriesData.map(category => (
          <ListGroupItem 
            active={category.categoryName === currentCategory ? true : false}
            onClick={() => handleClick(category.categoryName)}
            key={category.id}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default CategoryList;
