import Head from "next/head";
import List from "../components/List/List";
import { Title } from "./styles";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ENGINE Transformation Journey Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>ENGINE Transformation Journey Planner</h1> */}
      <Title>Great Portland Street Underground Station</Title>

      <List />
    </div>
  );
}
