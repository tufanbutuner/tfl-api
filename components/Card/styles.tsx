import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
CardContainer.displayName = "CardContainer";

export const Title = styled.h3`
  font-size: 1.25rem;
  margin: auto;
`;
Title.displayName = "Title";
