// CUSTOM IMPORTs
import { PostTypes, PostQuery, PostResolvers } from "./post/index.js";
import { CommentTypes, CommentQuery } from "./comment/index.js";
import { UserTypes, UserQuery, UserResolvers } from "./user/index.js";

/**
 * Schema
 */
const typeDefs = `#graphql
    ${PostTypes}
    ${CommentTypes}
    ${UserTypes}
`;

/**
 * Resolver
 */
const resolvers = {
  Query: {
    ...PostQuery,
    ...CommentQuery,
    ...UserQuery,
  },
  // Mutation: {},
  Post: PostResolvers,
  User: UserResolvers,
};

export { typeDefs, resolvers };
