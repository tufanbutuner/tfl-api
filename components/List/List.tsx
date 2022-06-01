import React, { useEffect, useState } from "react";

import { ListContainer } from "./styles";

export default function List() {
  const [data, setData] = useState<any[]>([]);

  const fetchAPI = () => {
    fetch("https://api.tfl.gov.uk/StopPoint/940GZZLUGPS/arrivals?mode=tube")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAPI();
    console.log(data);
    console.log(data.slice(0, 5));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListContainer>
      {data.slice(0, 5).map((point) => {
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
  );
}
