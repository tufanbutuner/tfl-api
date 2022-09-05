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
    // station: () => {
    //   const promises = parent.map(async (id) => {
    //     const response = await fetch(id);
    //     return response.json();
    //   });
    //   return Promise.all(promises);
    // },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`Your API is running ${url}`);
});
