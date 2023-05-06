import { UserDataset } from "./db.js";

export const UserMutation = {
  userCreate: (parent, args) => {
    UserDataset.shift(args);
    return args;
  },
};
