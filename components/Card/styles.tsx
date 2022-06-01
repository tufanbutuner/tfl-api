import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 2px solid #d3d3d3;
`;
CardContainer.displayName = "CardContainer";

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-left: 12px;
`;
Title.displayName = "Title";
