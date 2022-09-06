import { gql } from "apollo-server-micro";

export const typeDefs = gql`
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
