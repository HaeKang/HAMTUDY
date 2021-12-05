import React, { useState } from "react";
import styled from "styled-components";
import {theme} from "../assets/theme/theme";

const SearchWrapper = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  .search {
    background-color: ${theme.colors.background};
    box-shadow: 0px 7px 23px 1px rgba(216, 216, 255, 0.3);
    border-radius: 10px;
    padding: 0 12px;
  }
`;

const SearchInput = styled.input`
  font-size: ${theme.fontSize.s}px;
  width: 400px;
  padding: 10px 0;
`;

//FIXME categories delete
const categories = ["햄스토", "토익", "알고리즘", "윤영미교수님", "나물이"];

function Search() {
  const [value, setValue] = useState("");
  const onChange = (e:any) => {
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
          <button type="submit">🔍</button>
        </div>
        {/* <CategoryList categories={categories}></CategoryList> */}
      </SearchWrapper>
    </>
  );
}

export default Search;
