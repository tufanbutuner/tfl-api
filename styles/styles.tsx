import styled from "styled-components";

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0px;
  font-size: 1.75rem;
`;
Title.displayName = "Title";

export const Countdown = styled.span`
  display: flex;
  justify-content: end;
  margin-right: 36px;
  font-style: italic;
`;
Countdown.displayName = "Countdown";
