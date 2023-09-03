import lodash from "lodash";
import { useEffect, useState } from "react";
import {
  ArrivalList,
  LineName,
  ListElement,
  PlatCardContainer,
  PlatformCard,
  PlatformContainer,
  PlatformName,
  TimeToStation,
  TowardsTrain,
} from "./styles";
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

  return Object.keys(platform).map((plat: any, index: number) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <PlatCardContainer key={index}>
        <PlatformName>{plat}</PlatformName>
        <PlatformCard>
          {platform[plat]
            .sort((a: any, b: any) => a.timeToStation - b.timeToStation)
            .slice(0, 3)
            .map((arrival: any, index: number) => {
              return (
                <PlatformContainer key={index}>
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
              );
            })}
        </PlatformCard>
      </PlatCardContainer>
    );
  });
}
