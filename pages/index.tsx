import Head from "next/head";
import List from "../components/List/List";
import { Title } from "../styles/styles";
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
      <span>List will update in {timeLeft} seconds</span>
    </div>
  );
}
