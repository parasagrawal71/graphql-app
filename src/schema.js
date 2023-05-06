// CUSTOM IMPORTs
import { PostTypes, PostQuery, PostResolvers } from "./post/index.js";
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
  Post: PostResolvers,
};

export { typeDefs, resolvers };
