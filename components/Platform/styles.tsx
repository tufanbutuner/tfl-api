import styled from "styled-components";

export const PlatCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;
PlatCardContainer.displayName = "PlatCardContainer";

export const PlatformCard = styled.div`
  height: 50%;
  width: 80%;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 24px;
`;
PlatformCard.displayName = "PlatformCard";

export const PlatformContainer = styled.div``;
PlatformContainer.displayName = "PlatformContainer";

export const PlatformName = styled.span`
  display: flex;
  justify-content: center;
  padding: 24px 0px 0px 0px;
  font-weight: bold;
  color: black;
`;
PlatformName.displayName = "PlatformName";

export const PlatformsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px 64px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    min-width: 456px;
    margin: 0px;
  }
`;
PlatformsContainer.displayName = "PlatformsContainer";

export const ListContainer = styled.div``;
ListContainer.displayName = "ListContainer";

export const TowardsTrain = styled.span`
  font-weight: bold;
  margin-right: 12px;
`;
TowardsTrain.displayName = "TowardsTrain";

export const ArrivalList = styled.ul`
  list-style: none;
  display: flex;
  background-color: #f8f8f8;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  margin: 12px 24px;
`;
ArrivalList.displayName = "ArrivalList";

export const ListElement = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
`;
ListElement.displayName = "ListElement";

export const LineName = styled.p<{ lineName?: string }>`
  font-size: 0.8rem;
  margin-left: 4px;
  background-color: ${({ lineName }) =>
    lineName === "Hammersmith & City"
      ? "#D799AF"
      : lineName === "Victoria"
      ? "#00A0E2"
      : lineName === "District"
      ? "#007229"
      : lineName === "Bakerloo"
      ? "#894e24"
      : lineName === "Circle"
      ? "#ffce00"
      : lineName === "Central"
      ? "#dc241f"
      : lineName === "Northern"
      ? "#000"
      : lineName === "Jubilee"
      ? "#6a7278"
      : "#751056"};
  color: ${({ lineName }) =>
    lineName === "Metropolitan" ||
    lineName === "District" ||
    lineName === "Bakerloo" ||
    lineName === "Central" ||
    lineName === "Northern" ||
    lineName === "Jubilee"
      ? "#fff"
      : "#000"};
  border-radius: 8px;
  border: none;
  width: fit-content;
  padding: 4px 8px;
`;
LineName.displayName = "LineName";

export const TimeToStation = styled.span`
  margin-left: auto;
  margin-right: 24px;
`;
TimeToStation.displayName = "TimeToStation";

export const LiveUpdatesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
LiveUpdatesContainer.displayName = "LiveUpdatesContainer";

export const LiveUpdate = styled.span`
  font-size: 1.5rem;
  margin-left: 4px;
`;
LiveUpdate.displayName = "LiveUpdate";

export const Countdown = styled.span`
  display: flex;
  justify-content: end;
  margin-right: 36px;
  font-style: italic;
`;
Countdown.displayName = "Countdown";
