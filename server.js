import { buildSchema } from "graphql";
import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import pa11y from "pa11y";
const port = 4000;
const app = express();

app.use(cors());
app.use(express.static("pages"));

var schema = buildSchema(`
  type Station {
    id: String!
    stationName: String
    lineId: String
    lineName: String
    platformName: String
    direction: String
    timestamp: String
    timeToStation: Int
    currentLocation: String
    towards: String
    expectedArrival: String
    modeName: String
  }

  type Query {
    getArrivals(id: String!): [Station]
    station: [Station]
  }
`);

var root = {
  Query: {
    getArrivals: async (_, { id }) => {
      const response = await fetch(
        `https://api.tfl.gov.uk/StopPoint/${id}/arrivals?mode=tube`
      );
      return response.json();
    },
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.get("/test", async (_, res) => {
  const results = await pa11y("https://tfl-api-eight.vercel.app");
  res.status(200).json(results);
});

app.listen(port, () => console.log(`Server started on ${port}`));
