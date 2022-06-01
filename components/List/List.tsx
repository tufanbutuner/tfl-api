import { LineName, ListContainer } from "./styles";
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
    console.log(platformTwo.sort((a, b) => a.timeToStation - b.timeToStation));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card title="Live arrivals for platform 1">
        <ListContainer>
          {platformOne
            .sort((a, b) => a.timeToStation - b.timeToStation)
            .map((point) => {
              return (
                <div key={point.id}>
                  <ul>
                    <li>
                      {point.towards},{point.timeToStation}
                      <LineName lineName={point.lineName}>
                        {point.lineName}
                      </LineName>
                    </li>
                  </ul>
                </div>
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
                <div key={point.id}>
                  <ul>
                    <li>
                      {point.towards},{point.timeToStation}
                      <LineName lineName={point.lineName}>
                        {point.lineName}
                      </LineName>
                    </li>
                  </ul>
                </div>
              );
            })}
        </ListContainer>
      </Card>
    </>
  );
}
