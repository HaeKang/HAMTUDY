import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import CategoryList from "./CategoryList";

const categories = ["햄스토", "토익", "알고리즘", "윤영미교수님", "나물이"];

function Search() {
  return (
    <>
      <SearchWrapper>
        <div>
          <SearchInput
            type="text"
            name="query"
            placeholder="스터디룸을 찾아보아용~"
          />
          <SearchButton type="submit">🔍</SearchButton>
        </div>
        <CategoryList categories={categories}></CategoryList>
      </SearchWrapper>
    </>
  );
}
const SearchWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;
const SearchButton = styled.button`
  border: none;
  background-color: transparent !important;
`;
const SearchInput = styled.input`
  border: none;
  font-size: 14px;
  background-color: ${colors.gray};
  padding: 10px 20px;
`;
export default Search;
