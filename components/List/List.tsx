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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListContainer>
      {data.map((point) => {
        return (
          <div key={point.id}>
            <ul>
              <li>{point.towards}</li>
            </ul>
          </div>
        );
      })}
    </ListContainer>
  );
}
