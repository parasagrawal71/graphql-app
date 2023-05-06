// CUSTOM IMPORTs
import { PostTypes, PostQuery } from "./post/index.js";
import { CommentTypes, CommentQuery } from "./comment/index.js";

/**
 * Schema
 */
const typeDefs = `#graphql
    ${PostTypes}
    ${CommentTypes}
`;

/**
 * Resolver
 */
const resolvers = {
  Query: {
    ...PostQuery,
    ...CommentQuery,
  },
  // Mutation: {},
};

export { typeDefs, resolvers };
