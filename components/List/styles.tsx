import styled from "styled-components";

export const ListContainer = styled.div``;
ListContainer.displayName = "ListContainer";

export const ArrivalList = styled.ul`
  list-style: none;
  display: flex;
  background-color: #ededed;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  margin: 12px 24px;
`;
ArrivalList.displayName = "ArrivalList";

export const ListElement = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0px;
`;
ListElement.displayName = "ListElement";

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
