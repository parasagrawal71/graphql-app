import { CommentDataset } from "./data.js";

export const CommentQuery = {
  comments: (parent, args) => {
    return CommentDataset;
  },
};
