import React, { useEffect, useState } from "react";

import { ListContainer } from "./styles";

export default function List() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/StopPoint/940GZZLUGPS/Arrivals")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListContainer>
      <h2>Great Portland Street Station Arrivals</h2>
    </ListContainer>
  );
}
