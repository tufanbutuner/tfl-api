import {
  ArrivalList,
  LineName,
  ListContainer,
  ListElement,
  PlatformsContainer,
  TimeToStation,
  TowardsTrain,
} from "./styles";
import React, { useEffect, useState } from "react";

import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

export default function List() {
  const { data } = useFetch(
    "https://api.tfl.gov.uk/StopPoint/940GZZLUGPS/arrivals?mode=tube"
  );
  const [timeLeft, setTimeLeft] = useState(60);

  const filterPlatform = (platformName: string) => {
    const platform = data
      .filter((point) => point.platformName === platformName)
      .sort((a, b) => a.timeToStation - b.timeToStation)
      .slice(0, 5);
    return platform;
  };

  const convert = (time: number) => {
    var minute = Math.floor(time / 60);
    if (minute < 1) {
      return "Due";
    }
    return minute;
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft - 1 <= 0 ? 60 : timeLeft - 1));
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <PlatformsContainer>
      <Card title="Westbound - Platform 1">
        <div>List will update in {timeLeft} seconds</div>
        <ListContainer>
          {filterPlatform("Westbound - Platform 1").map((point) => {
            return (
              <ArrivalList key={point.id}>
                <ListElement>
                  <TowardsTrain>{point.towards}</TowardsTrain>
                  <LineName lineName={point.lineName}>
                    {point.lineName}
                  </LineName>
                  <TimeToStation>
                    {convert(point.timeToStation) !== "Due"
                      ? `${convert(point.timeToStation)} min`
                      : convert(point.timeToStation)}
                  </TimeToStation>
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
                  <LineName lineName={point.lineName}>
                    {point.lineName}
                  </LineName>
                  <TimeToStation>
                    {convert(point.timeToStation) !== "Due"
                      ? `${convert(point.timeToStation)} min`
                      : convert(point.timeToStation)}
                  </TimeToStation>
                </ListElement>
              </ArrivalList>
            );
          })}
        </ListContainer>
      </Card>
    </PlatformsContainer>
  );
}
