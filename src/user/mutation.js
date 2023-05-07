// import { UserDataset } from "./data.js";
import { UserModel } from "./model.js";

export const UserMutation = {
  addUser: async (parent, args) => {
    const { data } = args || {};
    const newUserId = await _getUserId();
    const addedUser = await UserModel.create({ ...data, id: newUserId });
    return addedUser;
  },
  // addUser: async (parent, args) => {
  //   UserDataset.shift(args);
  //   return args;
  // },

  updateUser: async (parent, args) => {
    const { id, data } = args || {};
    const updatedUser = await UserModel.findOneAndUpdate(
      { id },
      { ...(data || {}) }
    );
    return updatedUser;
  },
  // updateUser: (parent, args) => {
  //   const { id, data } = args || {};
  //   const matchedUser = UserDataset.filter((user) => user.id === id)[0];
  //   matchedUser.name = data.name;
  //   matchedUser.email = data.email;
  //   return matchedUser;
  // },
};

async function _getUserId() {
  const users = await UserModel.find().lean().sort({ id: -1 });
  return users?.[0]?.id ? Number(users?.[0]?.id) + 1 : 1;
}
