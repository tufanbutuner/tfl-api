import {
  ArrivalList,
  LineName,
  ListContainer,
  ListElement,
  PlatformsContainer,
  TimeToStation,
  TowardsTrain,
} from "./styles";
import React, { useEffect } from "react";

import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

interface ListProps {
  setTimeLeft?: any;
}

export default function List({ setTimeLeft }: ListProps) {
  const { data, loading } = useFetch(
    "https://api.tfl.gov.uk/StopPoint/940GZZLUGPS/arrivals?mode=tube"
  );

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
      setTimeLeft((timeLeft: number) =>
        timeLeft - 1 <= 0 ? 60 : timeLeft - 1
      );
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlatformsContainer>
      {loading && <div>Loading...</div>}
      {!data && (
        <span data-testid="no-live-updates">No live updates available</span>
      )}
      <Card title="Westbound - Platform 1">
        <ListContainer>
          {filterPlatform("Westbound - Platform 1").map((point) => {
            return (
              <ArrivalList key={point.id}>
                <ListElement>
                  <TowardsTrain>{point.towards}</TowardsTrain>
                  <LineName lineName={point.lineName}>
                    {point.lineName}
                  </LineName>
                  <TimeToStation data-testid="time-to-station">
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
