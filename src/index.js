import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// CUSTOM IMPORTs
import { typeDefs, resolvers } from "./schema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 6100 } });

console.log(`🚀  Server ready at: ${url}`);
