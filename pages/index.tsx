import { Countdown, Title } from "../styles/styles";

import Head from "next/head";
import List from "../components/List/List";
import { useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(60);
  return (
    <div className="container">
      <Head>
        <title>ENGINE Transformation Journey Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Great Portland Street Underground Station</Title>

      <List setTimeLeft={setTimeLeft} />
      <Countdown>Times will update in {timeLeft} seconds</Countdown>
    </div>
  );
}
