import styled from "styled-components";

export const Container = styled.div``;
Container.displayName = "Container";

export const StationId = styled.h4`
  display: flex;
  justify-content: center;
`;
StationId.displayName = "StationId";

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0px 4px 0px;
  font-size: 1.75rem;

  @media (max-width: 768px) {
    text-align: center;
    margin: 60px 32px 4px 32px;
  }
`;
Title.displayName = "Title";

export const Subtitle = styled.h4`
  display: flex;
  justify-content: center;
  margin: 0px 0px 60px 0px;
`;
Subtitle.displayName = "Subtitle";
