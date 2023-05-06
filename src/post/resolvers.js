import { CommentDataset } from "../comment/index.js";
import { UserDataset } from "../user/index.js";

export const PostResolvers = {
  comments: (post, args) => {
    return CommentDataset.filter((comment) => {
      if (comment.postId === post.id) {
        return comment;
      }
    });
  },

  user: (post, args) => {
    return UserDataset.filter((user) => {
      if (user.id === post.userId) {
        return user;
      }
    })[0];
  },
};
