import { Container, Subtitle, Title, StationId } from "../styles/styles";

import Head from "next/head";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import Platform from "../components/Platform/Platform";
import Status from "../components/Status/Status";

export default function Home() {
  const [selected, setSelected] = useState("940GZZLUGPS");

  return (
    <Container>
      <Head>
        <title>Transform Journey Planner</title>
        <link
          rel="icon"
          href="https://static.wixstatic.com/media/82ad3e_99fbac5aa96e4b91b5d2460fcd9181a7~mv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/82ad3e_99fbac5aa96e4b91b5d2460fcd9181a7~mv2.png"
        />
      </Head>

      <Title>Tube Platform Finder</Title>
      <Subtitle>Train Arrival Times</Subtitle>

      <Status />

      <SearchBar selected={selected} setSelected={setSelected} />
      <StationId>current station id: {selected}</StationId>
      <Platform selected={selected} />
    </Container>
  );
}
