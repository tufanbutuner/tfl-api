import styled from "styled-components";

export const Container = styled.div``;
Container.displayName = "Container";

export const HeroText = styled.div`
  text-align: center;
  position: absolute;
  color: white;
`;

export const StationId = styled.h4`
  display: flex;
  justify-content: center;
  color: #000;
  margin: 80px 80px 0px 80px;
  font-size: 64px;

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
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

export const Header = styled.header`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  background: #fff;
  color: grey;
`;
Header.displayName = "Header";

export const Hero = styled.div`
  max-height: 400px;
  min-height: 400px;
  position: relative;
  height: 400px;
  border-radius: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: rgb(236, 229, 220);
  color: grey;
  margin: 24px 64px 24px 64px;
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
