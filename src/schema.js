// CUSTOM IMPORTs
import { PostTypes, PostQuery } from "./post/index.js";

/**
 * Schema
 */
const typeDefs = `#graphql
    ${PostTypes}
`;

/**
 * Resolver
 */
const resolvers = {
  Query: {
    ...PostQuery,
  },
  // Mutation: {},
};

export { typeDefs, resolvers };
