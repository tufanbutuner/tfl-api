import { Container, Subtitle, Title } from "../styles/styles";

import Head from "next/head";
import List from "../components/List/List";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import Platform from "../components/Platform/Platform";
import Status from "../components/Status/Status";

export default function Home() {
  const [selected, setSelected] = useState("940GZZLUVIC");

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
      <h4>current station id: {selected}</h4>
      <Platform selected={selected} />
    </Container>
  );
}
