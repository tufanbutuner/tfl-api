import styled from "styled-components";

export const ListContainer = styled.div``;
ListContainer.displayName = "ListContainer";

export const LineName = styled.p<{ lineName?: string }>`
  font-size: 0.8rem;
  margin-left: 12px;
  background-color: ${({ lineName }) =>
    lineName === "Hammersmith & City"
      ? "#D799AF"
      : lineName === "Circle"
      ? "#ffce00"
      : "#751056"};
  color: ${({ lineName }) => (lineName === "Metropolitan" ? "#fff" : "#000")};
  border-radius: 8px;
  border: none;
  width: fit-content;
  padding: 4px 8px;
`;
LineName.displayName = "LineName";
