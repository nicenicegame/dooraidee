import React from 'react'
import styled from 'styled-components'

const Search = ({ setSearchInput }) => {
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <StyledSearch>
      <i className="fas fa-search"></i>
      <SearchInput
        type="text"
        onChange={searchInputHandler}
        placeholder="Type something here..."
      />
    </StyledSearch>
  )
}

const SearchInput = styled.input`
  color: whitesmoke;
  font-family: inherit;
  font-size: 14px;
  outline: none;
  background: none;
  border: none;
  flex: 1;

  &::placeholder {
    color: whitesmoke;
    opacity: 0.4;
  }
`

const StyledSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 2rem;
  background-color: gray;
  outline: none;

  i {
    margin-right: 1rem;
  }
`

export default Search
