import { UserDataset } from "./data.js";

export const UserMutation = {
  userCreate: (parent, args) => {
    UserDataset.shift(args);
    return args;
  },

  userUpdate: (parent, args) => {
    const { id, data } = args || {};
    const matchedUser = UserDataset.filter((user) => user.id === id)[0];
    matchedUser.name = data.name;
    matchedUser.email = data.email;
    return matchedUser;
  },
};
