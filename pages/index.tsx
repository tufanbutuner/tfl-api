import { Container, Header, StationId, Title } from "../styles/styles";

import Head from "next/head";
import { useState } from "react";
import Platform from "../components/Platform/Platform";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
  var [selected, setSelected] = useState({
    id: "",
    stationName: "",
  });

  return (
    <>
      <Header>
        <Title>Transform TfL Arrivals</Title>
      </Header>

      <StationId>
        {!selected.stationName ? "Search for a station" : selected.stationName}
      </StationId>

      <SearchBar selected={selected} setSelected={setSelected} />
      <Container>
        <Head>
          <title>Transform Journey Planner</title>
          <link
            rel="icon"
            href="https://static.wixstatic.com/media/82ad3e_99fbac5aa96e4b91b5d2460fcd9181a7~mv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/82ad3e_99fbac5aa96e4b91b5d2460fcd9181a7~mv2.png"
          />
        </Head>

        {selected.id && <Platform selected={selected} />}
      </Container>
    </>
  );
}
