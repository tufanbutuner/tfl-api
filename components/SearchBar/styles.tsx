import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 40px;
`;
SearchBarContainer.displayName = "SearchBarContainer";

export const SearchInput = styled.input`
  font-family: Space Grotesk;
  border: 1px solid #d4d4d4;
  position: absolute;
  background: #f2f2f2;
  padding: 12px;
  border-radius: 4px;
  width: 60%;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
    outline: none;
  }
`;
SearchInput.displayName = "SearchInput";

export const SearchResults = styled.div`
  padding: 12px;
  margin-top: 40px;
  width: 64%;
  height: 150px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 4px;
`;
SearchResults.displayName = "SearchResults";

export const Station = styled.span`
  cursor: pointer;
  display: flex;
  color: #000;
`;
Station.displayName = "Station";
