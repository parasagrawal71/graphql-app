import { CommentDataset } from "./db.js";

export const CommentQuery = {
  comments: (parent, args) => {
    return CommentDataset;
  },
};
