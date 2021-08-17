import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import CategoryList from "./CategoryList";

//FIXME categories delete
const categories = ["햄스토", "토익", "알고리즘", "윤영미교수님", "나물이"];

function Search() {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchWrapper>
        <div className="search">
          <SearchInput
            type="text"
            name="query"
            placeholder="오늘은 어떤 공부를 하면 좋을까?"
            onChange={onChange}
          />
          <SearchButton type="submit">🔍</SearchButton>
        </div>
        {/* <CategoryList categories={categories}></CategoryList> */}
      </SearchWrapper>
    </>
  );
}
const SearchWrapper = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  .search {
    background-color: ${colors.gray};
  }
`;
const SearchButton = styled.button`
  border: none;
  background-color: transparent !important;
`;
const SearchInput = styled.input`
  border: none;
  font-size: 14px;
  width: 400px;
  padding: 10px 20px;
  background-color: transparent;
`;
export default Search;
