import {
  ArrivalList,
  LineName,
  ListElement,
  PlatformContainer,
  TimeToStation,
  TowardsTrain,
  PlatformName,
} from "./styles";
import React, { useEffect, useState } from "react";
import lodash from "lodash";
interface Props {
  selected?: any;
}

export default function Platform({ selected }: Props): any {
  const [platform, setPlatform] = useState<any>();

  const convert = (time: number) => {
    let minute = Math.floor(time / 60);
    if (minute < 1) {
      return "Due";
    }
    return minute;
  };

  useEffect(() => {
    if (!selected) return;
    fetch(`https://api.tfl.gov.uk/StopPoint/${selected.id}/arrivals?mode=tube`)
      .then((r) => r.json())
      .then((data) => {
        setPlatform(lodash.groupBy(data, (d) => d.platformName));
      });
  }, [selected]);

  if (!platform) return <></>;

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
                  <PlatformName>{point.platformName}</PlatformName>
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
