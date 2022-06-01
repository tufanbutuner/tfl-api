import React, { useEffect, useState } from "react";

import Card from "../Card/Card";
import { ListContainer } from "./styles";

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
    // console.log(data);
    // console.log(data.slice(0, 5));
    platformOne.slice(0, 5);
    platformTwo.slice(0, 5);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card title="Live arrivals for platform 1">
        <ListContainer>
          {platformOne.slice(0, 5).map((point) => {
            return (
              <div key={point.id}>
                <ul>
                  <li>
                    {point.towards},{point.timeToStation}
                  </li>
                </ul>
              </div>
            );
          })}
        </ListContainer>
      </Card>
      <Card title="Live arrivals for Platform 2">
        <ListContainer>
          {platformTwo.slice(0, 5).map((point) => {
            return (
              <div key={point.id}>
                <ul>
                  <li>
                    {point.towards},{point.timeToStation}
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
