import {
  Container,
  Title,
  StationId,
  Header,
  Hero,
  HeroText,
} from "../styles/styles";

import Head from "next/head";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import PlatformRework from "../components/Platform/PlatformRework";

export default function Home() {
  var [selected, setSelected] = useState({
    id: "940GZZLUGPS",
    stationName: "Great Portland Street Underground Station",
  });

  return (
    <>
      <Header>
        <Title>Transform TfL Arrivals</Title>
      </Header>
      <Hero>
        <HeroText>
          <StationId>{selected.stationName}</StationId>
          <SearchBar selected={selected} setSelected={setSelected} />
        </HeroText>
      </Hero>
      <Container>
        <Head>
          <title>Transform Journey Planner</title>
          <link
            rel="icon"
            href="https://static.wixstatic.com/media/82ad3e_99fbac5aa96e4b91b5d2460fcd9181a7~mv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/82ad3e_99fbac5aa96e4b91b5d2460fcd9181a7~mv2.png"
          />
        </Head>
        <PlatformRework selected={selected} />
      </Container>
    </>
  );
}
