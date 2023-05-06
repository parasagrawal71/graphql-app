import { PostDataset } from "../post/index.js";

export const UserResolvers = {
  posts: (user, args) => {
    return PostDataset.filter((post) => {
      if (post.userId === user.id) {
        return post;
      }
    });
  },
};
