import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./typeDef";
import { resolvers } from "./resolvers";
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
  await start;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
