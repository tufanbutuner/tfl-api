import {
  ArrivalList,
  LineName,
  ListElement,
  PlatformContainer,
  TimeToStation,
  TowardsTrain,
} from "./styles";
import React, { useEffect, useMemo } from "react";

import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

export default function Platform() {
  const { data } = useFetch(
    `https://api.tfl.gov.uk/StopPoint/940GZZLUOXC/arrivals?mode=tube`
  );

  // const filterPlatform = (platformName: any) => {
  //   const platform = data
  //     .filter((point) => point.platformName === platformName)
  //     .sort((a, b) => a.timeToStation - b.timeToStation)
  //     .slice(0, 5);
  //   return platform;
  // };

  const convert = (time: number) => {
    var minute = Math.floor(time / 60);
    if (minute < 1) {
      return "Due";
    }
    return minute;
  };

  // const platformNames = useMemo(() => getPlatforms(data), [data]);

  // const platformSet = new Set();
  // const platforms = Array.from(platformSet);

  // const getPlatforms = (data: any) => {
  //   data.forEach((point: any) => {
  //     point.platformName && platformSet.add(point.platformName);
  //   });
  //   return Array.from(platformSet);
  // };

  // useEffect(() => {
  //   data && console.log(data);
  //   // console.log(platformSet.forEach((platform) => console.log(platform)));
  //   console.log(Array.from(platformSet));
  // }, [data, platformSet]);

  const platformSet = new Set();
  data.forEach((point: any) => {
    point.platformName && platformSet.add(point.platformName);
  });
  const platforms = Array.from(platformSet);

  useEffect(() => {
    // data && console.log(data);
    // console.log(platformSet.forEach((platform) => console.log(platform)));
    // console.log(Array.from(platformSet));
    console.log(platforms);
  }, [data, platforms]);

  return (
    // <PlatformContainer>
    //   {filterPlatform(platformName).map((point: any) => {
    //     return (
    //       <ArrivalList key={point.id}>
    //         <ListElement>
    //           <TowardsTrain>{point.towards}</TowardsTrain>
    //           <LineName lineName={point.lineName}>{point.lineName}</LineName>
    //           <TimeToStation>
    //             {convert(point.timeToStation) !== "Due"
    //               ? `${convert(point.timeToStation)} min`
    //               : convert(point.timeToStation)}
    //           </TimeToStation>
    //         </ListElement>
    //       </ArrivalList>
    //     );
    //   })}
    // </PlatformContainer>
    <PlatformContainer>
      <Card>
        {platforms?.map((platform: any, point) => {
          return (
            <ArrivalList key={platform.id}>
              <ListElement>{platform}</ListElement>
            </ArrivalList>
          );
        })}
      </Card>
    </PlatformContainer>
  );
}
