import { PostDataset } from "./data.js";

export const PostQuery = {
  posts: (parent, args) => {
    return PostDataset;
  },

  post: (parent, args) => {
    const filteredPostArr = PostDataset.filter((post) => {
      if (post.id === args.id) {
        return post;
      }
    });
    return filteredPostArr[0];
  },
};
