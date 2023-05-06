import { UserDataset } from "./db.js";

export const UserQuery = {
  users: (parent, args) => {
    return UserDataset;
  },
};
