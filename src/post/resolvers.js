import { CommentDataset } from "../comment/index.js";

export const PostResolvers = {
  comments: (post, args) => {
    return CommentDataset.filter((comment) => {
      if (comment.postId === post.id) {
        return comment;
      }
    });
  },
};
