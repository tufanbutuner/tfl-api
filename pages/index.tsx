import { Container, Subtitle, Title } from "../styles/styles";

import Head from "next/head";
import List from "../components/List/List";
import Platform from "../components/Platform/Platform";
import Status from "../components/Status/Status";

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

      <Status />
      <List />
    </Container>
  );
}
