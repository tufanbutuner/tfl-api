import {
  ArrivalList,
  LineName,
  ListElement,
  PlatformContainer,
  TimeToStation,
  TowardsTrain,
} from "./styles";
import React, { useEffect, useState } from "react";
import lodash from "lodash";
interface Props {
  selected?: any;
}

export default function Platform({ selected }: Props) {
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
      .then((r) => r.json())
      .then((data) => {
        setPlatform(lodash.groupBy(data, (d) => d.platformName));
      });
  }, [selected]);

  if (!platform) return;
  return Object.keys(platform).map((s: any) => {
    return platform[s]
      .sort((a: any, b: any) => a.timeToStation - b.timeToStation)
      .slice(0, 2)
      .map((point: any) => {
        return (
          <>
            <PlatformContainer>
              <ArrivalList>
                <ListElement>
                  <span>{point.platformName}</span>
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
            </PlatformContainer>
          </>
        );
      });
  });
}
