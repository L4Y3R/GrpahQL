import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//types
import { typeDefs } from "./schema";

// server setup
const server = new ApolloServer({
  typeDefs,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server Ready at Port", 4000);
