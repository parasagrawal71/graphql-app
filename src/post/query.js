import { PostDataset } from "./db.js";

export const PostQuery = {
  posts: (parent, args) => {
    return PostDataset;
  },
};
