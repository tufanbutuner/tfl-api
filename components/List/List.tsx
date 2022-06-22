import {
  ArrivalList,
  Countdown,
  LineName,
  ListContainer,
  ListElement,
  LiveUpdate,
  LiveUpdatesContainer,
  PlatformsContainer,
  TimeToStation,
  TowardsTrain,
} from "./styles";
import React, { useEffect, useState } from "react";

import Card from "../Card/Card";
import Platform from "../Platform/Platform";
import { TiWarningOutline } from "react-icons/ti";
import useFetch from "../../hooks/useFetch";

export default function List() {
  const { data, loading } = useFetch(
    `https://api.tfl.gov.uk/StopPoint/940GZZLUGPS/arrivals?mode=tube`
  );
  const [timeLeft, setTimeLeft] = useState(60);

  // useEffect(() => {
  //   const timerInterval = setInterval(() => {
  //     setTimeLeft((timeLeft: number) =>
  //       timeLeft - 1 <= 0 ? 60 : timeLeft - 1
  //     );
  //   }, 1000);
  //   return () => {
  //     clearInterval(timerInterval);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
    data && console.log(data);
    // console.log(platformSet.forEach((platform) => console.log(platform)));
    // console.log(Array.from(platformSet));
    // console.log(filterPlatform("Southbound - Platform 3"));
  }, [data]);

  return (
    <>
      {data.length === 0 ? (
        <LiveUpdatesContainer>
          <TiWarningOutline size={36} />
          <LiveUpdate data-testid="no-live-updates">
            No live updates available
          </LiveUpdate>
        </LiveUpdatesContainer>
      ) : (
        <PlatformsContainer>
          {/* <Card title="Westbound - Platform 1">
            <ListContainer>
              {data.map((point) => {
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
          </Card> */}

          {/* <Card title="Eastbound - Platform 2">
            <ListContainer>
              {data.map((point) => {
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
          </Card> */}
          {/* {platforms?.map((platform: any) => {
              return (
                <div key={platform}>
                  <span>{platform}</span>
                </div>
              );
            })} */}
          <Platform />
          <Countdown>Times will update in {timeLeft} seconds</Countdown>
        </PlatformsContainer>
      )}
    </>
  );
}
