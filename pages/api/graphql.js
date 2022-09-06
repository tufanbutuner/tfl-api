import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../schemas/schemas.js";
import { resolvers } from "../../schemas/resolvers.js";
import Cors from "micro-cors";

const cors = Cors();

const server = new ApolloServer({
  cors: { origin: "*" },
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

const start = server.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await start;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
