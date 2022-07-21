import {
  ArrivalList,
  LineName,
  ListElement,
  PlatformContainer,
  TimeToStation,
  TowardsTrain,
} from "./styles";
import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { TiPointOfInterest } from "react-icons/ti";
interface Props {
  selected?: any;
  setSelected?: any;
}

export default function Platform({ selected, setSelected }: Props) {
  const [platform, setPlatform] = useState<any>();

  const convert = (time: number) => {
    var minute = Math.floor(time / 60);
    if (minute < 1) {
      return "Due";
    }
    return minute;
  };

  useEffect(() => {
    if (!selected) return;
    fetch(`https://api.tfl.gov.uk/StopPoint/${selected}/arrivals?mode=tube`)
      .then((response) => response.json())
      .then((data) => {
        var lmao = _.groupBy(data, (d) => d.platformName);
        setPlatform(lmao);
      });
  }, [selected]);

  // const filterPlatform = useCallback(
  //   (platformName?: any) => {
  //     // console.log(platform);
  //     // return;
  //     const platformNames = platform
  //       .sort((a: any, b: any) => a.timeToStation - b.timeToStation)
  //       .slice(0, 2);
  //     return platformNames;
  //   },
  //   [platform]
  // );

  const filterPlatform = () => {
    platform &&
      Object.keys(platform).forEach((p: any) => {
        console.log(p, platform[p]);
      });
  };

  let content;

  {
    platform &&
      Object.keys(platform).forEach((p: any) => {
        content = platform[p].map((point: any) => {
          // console.log(point.id);
          <PlatformContainer>
            {/* <ArrivalList>
              <ListElement>
                <span>{point.platformName}</span>
                <TowardsTrain>{point.towards}</TowardsTrain>
                <LineName lineName={point.lineName}>{point.lineName}</LineName>
                <TimeToStation>
                  {/* {convert(point.timeToStation) !== "Due"
                      ? `${convert(point.timeToStation)} min`
                      : convert(point.timeToStation)} 
                  Due
                </TimeToStation>
              </ListElement>
            </ArrivalList> */}
            <p>{point.id}</p>
          </PlatformContainer>;
        });
      });
  }
  console.log(content);

  return <>{content}</>;
}
