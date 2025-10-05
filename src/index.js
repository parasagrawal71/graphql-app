import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import "./utils/db.connect.js";
import { typeDefs, resolvers } from "./schema.js";

dotenv.config({
  path: `../.env.${process.env.NODE_ENV}`,
});

const PORT = process.env.PORT || 6100;
const app = express();

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

// Start Apollo server manually
await server.start();

// Middleware for Apollo + REST routes
app.use("/graphql", bodyParser.json(), expressMiddleware(server));

// Example REST route
app.get("/health", (req, res) => {
  res.send("Server is healthy 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`🚀 GraphQL ready at http://localhost:${PORT}/graphql`);
});
