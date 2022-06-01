import Card from "../components/Card/Card";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ENGINE Transformation Journey Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the ENGINE Transformation Journey Planner </h1>

      <Card title="Live arrivals"></Card>

      <footer>Tufan Butuner</footer>
    </div>
  );
}
