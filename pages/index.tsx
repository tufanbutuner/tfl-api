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
        <title>ENGINE Transformation Journey Planner</title>
        <link
          rel="icon"
          href="https://www.enginegroup.com/uk/icons/icon-48x48.png"
        />
      </Head>

      <Title>Tube Platform Finder</Title>
      <Subtitle>Train Arrival Times</Subtitle>
      <h4>current station id: {selected}</h4>

      <Status />
      <SearchBar selected={selected} setSelected={setSelected} />
      <Platform selected={selected} setSelected={setSelected} />
    </Container>
  );
}
