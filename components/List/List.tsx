import { ArrivalList, LineName, ListContainer, ListElement } from "./styles";
import React, { useEffect, useState } from "react";

import Card from "../Card/Card";

export default function List() {
  const [data, setData] = useState<any[]>([]);

  const fetchAPI = () => {
    fetch("https://api.tfl.gov.uk/StopPoint/940GZZLUGPS/arrivals?mode=tube")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  const platformOne = data.filter(
    (point) => point.platformName === "Westbound - Platform 1"
  );

  const platformTwo = data.filter(
    (point) => point.platformName === "Eastbound - Platform 2"
  );

  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card title="Live arrivals at Platform 1">
        <ListContainer>
          {platformOne
            .sort((a, b) => a.timeToStation - b.timeToStation)
            .map((point) => {
              return (
                <ArrivalList key={point.id}>
                  <ListElement>
                    {point.towards},{point.timeToStation}
                    <LineName lineName={point.lineName}>
                      {point.lineName}
                    </LineName>
                  </ListElement>
                </ArrivalList>
              );
            })}
        </ListContainer>
      </Card>

      <Card title="Live arrivals for Platform 2">
        <ListContainer>
          {platformTwo
            .sort((a, b) => a.timeToStation - b.timeToStation)
            .map((point) => {
              return (
                <ArrivalList key={point.id}>
                  <ListElement>
                    {point.towards},{point.timeToStation}
                    <LineName lineName={point.lineName}>
                      {point.lineName}
                    </LineName>
                  </ListElement>
                </ArrivalList>
              );
            })}
        </ListContainer>
      </Card>
    </>
  );
}
