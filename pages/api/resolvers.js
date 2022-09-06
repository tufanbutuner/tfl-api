import fetch from "node-fetch";

export const resolvers = {
  Query: {
    getArrivals: async (_, { id }) => {
      const response = await fetch(
        `https://api.tfl.gov.uk/StopPoint/${id}/arrivals?mode=tube`
      );
      return response.json();
    },
  },
};
