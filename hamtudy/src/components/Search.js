import React from "react";
import styled from "styled-components";
import CategoryList from "./CategoryList";

const categories = ["햄스토", "토익", "알고리즘", "윤영미교수님", "나물이"];

function Search() {
  return (
    <>
      <SearchWrapper>
        <input type="text" name="query" placeholder="스터디룸을 찾아보아용~" />
        <SearchButton type="submit">🔍</SearchButton>
        <CategoryList categories={categories}></CategoryList>
      </SearchWrapper>
    </>
  );
}
const SearchWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
`;
const SearchButton = styled.button`
  border: none;
  background-color: transparent !important;
`;
export default Search;
