import styled from "styled-components";

export const Container = styled.div``;
Container.displayName = "Container";

export const StationId = styled.span`
  display: flex;
  justify-content: center;
  padding: 24px 0px 0px 0px;
  font-weight: bold;
  font-size: 2rem;
  color: black;

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    margin: 1rem;
  }
`;
StationId.displayName = "StationId";

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0px 4px 0px;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    text-align: center;
    margin: 2rem 1rem 2rem 1rem;
    font-size: 1.25rem;
  }
`;
Title.displayName = "Title";

export const Subtitle = styled.h4`
  display: flex;
  justify-content: center;
  margin: 0px 0px 60px 0px;
`;
Subtitle.displayName = "Subtitle";

export const Header = styled.header`
  background: #fff;
  color: grey;
`;
Header.displayName = "Header";

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: rgb(236, 229, 220);
  color: grey;
  margin: 2rem 8rem;
`;
Hero.displayName = "Hero";

export const Code = styled.p`
  background: rgb(236, 229, 220);
  color: grey;
  border-radius: 6px;
  width: fit-content;
  padding: 6px;
`;
Code.displayName = "Code";

export const TestContainer = styled.div`
  display: flex;
  margin: 60px;
`;
TestContainer.displayName = "TestContainer";

export const Result = styled.div``;
Result.displayName = "Result";
