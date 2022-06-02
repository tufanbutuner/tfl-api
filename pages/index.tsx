import Head from "next/head";
import List from "../components/List/List";
import { Title } from "../styles/styles";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ENGINE Transformation Journey Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Great Portland Street Underground Station</Title>

      <List />
    </div>
  );
}
