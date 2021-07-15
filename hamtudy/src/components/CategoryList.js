import React from "react";

function CategoryButton({ category }) {
  console.log("AF?WEAFAWF");
  console.log("category", category);
  return <button>{category}</button>;
}

function CategoryList({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <CategoryButton category={category}></CategoryButton>
      ))}
    </div>
  );
}
export default CategoryList;
