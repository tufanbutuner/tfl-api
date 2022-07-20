import { Container, Subtitle, Title } from "../styles/styles";

import Head from "next/head";
import List from "../components/List/List";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>ENGINE Transformation Journey Planner</title>
        <link
          rel="icon"
          href="https://www.enginegroup.com/uk/icons/icon-48x48.png"
        />
      </Head>

      <Title>Great Portland Street Station</Title>
      <Subtitle>Tube Arrival Times</Subtitle>

      {/* <Status /> */}
      <SearchBar />
      <List />
    </Container>
  );
}
