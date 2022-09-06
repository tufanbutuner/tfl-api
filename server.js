import { ApolloServer } from "apollo-server";
import fetch from "node-fetch";

const typeDefs = `
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
`;

const resolvers = {
  Query: {
    getArrivals: async (_, { id }) => {
      const response = await fetch(
        `https://api.tfl.gov.uk/StopPoint/${id}/arrivals?mode=tube`
      );
      return response.json();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cors: { origin: "*" },
});

server.listen().then(({ url }) => {
  console.log(`Your API is running ${url}`);
});
