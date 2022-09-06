import {
  ArrivalList,
  LineName,
  ListElement,
  PlatformContainer,
  TimeToStation,
  TowardsTrain,
  PlatformName,
  PlatCardContainer,
  PlatformCard,
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

  return Object.keys(platform).map((plat: any) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <PlatCardContainer>
        <PlatformName>{platform[platform]}</PlatformName>
        <PlatformCard>
          {platform[plat]
            .sort((a: any, b: any) => a.timeToStation - b.timeToStation)
            .slice(0, 3)
            .map((arrival: any) => {
              return (
                <>
                  <PlatformContainer>
                    <ArrivalList>
                      <ListElement>
                        <TowardsTrain>{arrival.towards}</TowardsTrain>
                        <LineName lineName={arrival.lineName}>
                          {arrival.lineName}
                        </LineName>
                        <TimeToStation>
                          {convert(arrival.timeToStation) !== "Due"
                            ? `${convert(arrival.timeToStation)} min`
                            : convert(arrival.timeToStation)}
                        </TimeToStation>
                      </ListElement>
                    </ArrivalList>
                  </PlatformContainer>
                </>
              );
            })}
        </PlatformCard>
      </PlatCardContainer>
    );
  });
}
