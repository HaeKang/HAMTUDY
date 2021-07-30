import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

function CategoryButton({ category }) {
  return <Button>{category}</Button>;
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
const Button = styled.button`
  background-color: ${colors.point};
  border: none;
  border-radius: 24px;
  color: white;
  font-size: 14px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
`;

export default CategoryList;
