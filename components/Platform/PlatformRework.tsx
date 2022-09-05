import {
  ArrivalList,
  LineName,
  ListElement,
  PlatformContainer,
  TimeToStation,
  TowardsTrain,
  PlatformName,
  PlatformCard,
  PlatCardContainer,
} from "./styles";
import React from "react";
import lodash from "lodash";
import { gql, useQuery } from "@apollo/client";

interface Props {
  selected?: any;
}

const GET_ALL_ARRIVALS = gql`
  query Arrivals($id: String!) {
    getArrivals(id: $id) {
      id
      stationName
      platformName
      lineName
      towards
      timeToStation
    }
  }
`;

export default function PlatformRework({ selected }: Props): any {
  const { loading, error, data } = useQuery(GET_ALL_ARRIVALS, {
    variables: { id: selected.id },
  });

  const convert = (time: number) => {
    let minute = Math.floor(time / 60);
    if (minute < 1) {
      return "Due";
    }
    return minute;
  };

  const result = lodash.groupBy(data?.getArrivals, (d) => d.platformName);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return Object.keys(result).map((platform: any) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <PlatCardContainer>
        <PlatformCard>
          <PlatformName>{platform}</PlatformName>
          {result[platform]
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

//     .sort((a: any, b: any) => a.timeToStation - b.timeToStation)
//     .slice(0, 3)
//     .map((arrival: any) => {
//       return (
//         <>
//           <PlatformContainer>
//             <ArrivalList>
//               <ListElement>
//                 <PlatformName>{arrival.platformName}</PlatformName>
//                 <TowardsTrain>{arrival.towards}</TowardsTrain>
//                 <LineName lineName={arrival.lineName}>
//                   {arrival.lineName}
//                 </LineName>
//                 <TimeToStation>
//                   {convert(arrival.timeToStation) !== "Due"
//                     ? `${convert(arrival.timeToStation)} min`
//                     : convert(arrival.timeToStation)}
//                 </TimeToStation>
//               </ListElement>
//             </ArrivalList>
//           </PlatformContainer>
//         </>
//       );
//     });
// });
