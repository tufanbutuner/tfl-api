import Card from "../components/Card/Card";
import Head from "next/head";
import List from "../components/List/List";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ENGINE Transformation Journey Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the ENGINE Transformation Journey Planner</h1>
      <h3>Great Portland Street Station Arrival Times</h3>
      <List />
    </div>
  );
}
