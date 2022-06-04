import { Container, Countdown, Subtitle, Title } from "../styles/styles";

import Head from "next/head";
import List from "../components/List/List";
import { useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(60);
  return (
    <Container>
      <Head>
        <title>ENGINE Transformation Journey Planner</title>
        <link
          rel="icon"
          href="https://www.enginegroup.com/uk/icons/icon-48x48.png"
        />
      </Head>

      <Title>Great Portland Street Underground Station</Title>
      <Subtitle>Tube Arrival Times</Subtitle>

      <List setTimeLeft={setTimeLeft} />
      <Countdown>Times will update in {timeLeft} seconds</Countdown>
    </Container>
  );
}
