import {
  ArrivalList,
  LineName,
  ListContainer,
  ListElement,
  PlatformsContainer,
  TowardsTrain,
} from "./styles";

import Card from "../Card/Card";
import React from "react";
import useFetch from "../../hooks/useFetch";

export default function List() {
  const { data } = useFetch(
    "https://api.tfl.gov.uk/StopPoint/940GZZLUGPS/arrivals?mode=tube"
  );

  const filterPlatform = (platformName: string) => {
    const platform = data
      .filter((point) => point.platformName === platformName)
      .sort((a, b) => a.timeToStation - b.timeToStation)
      .slice(0, 5);
    return platform;
  };

  function convert(time: number) {
    var minute = Math.floor(time / 60);
    if (minute < 1) {
      return "Due";
    }
    return minute;
  }

  return (
    <>
      <PlatformsContainer>
        <Card title="Westbound - Platform 1">
          <ListContainer>
            {filterPlatform("Westbound - Platform 1").map((point) => {
              return (
                <ArrivalList key={point.id}>
                  <ListElement>
                    <TowardsTrain>{point.towards} </TowardsTrain>
                    {convert(point.timeToStation) === "Due" ? (
                      <span>{convert(point.timeToStation)}</span>
                    ) : (
                      <span>{convert(point.timeToStation)} min</span>
                    )}
                    <LineName lineName={point.lineName}>
                      {point.lineName}
                    </LineName>
                  </ListElement>
                </ArrivalList>
              );
            })}
          </ListContainer>
        </Card>

        <Card title="Eastbound - Platform 2">
          <ListContainer>
            {filterPlatform("Eastbound - Platform 2").map((point) => {
              return (
                <ArrivalList key={point.id}>
                  <ListElement>
                    <TowardsTrain>{point.towards}</TowardsTrain>
                    {convert(point.timeToStation) === "Due" ? (
                      <>{convert(point.timeToStation)}</>
                    ) : (
                      <span>{convert(point.timeToStation)} min</span>
                    )}
                    <LineName lineName={point.lineName}>
                      {point.lineName}
                    </LineName>
                  </ListElement>
                </ArrivalList>
              );
            })}
          </ListContainer>
        </Card>
      </PlatformsContainer>
    </>
  );
}
