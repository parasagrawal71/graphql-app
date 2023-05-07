import { UserDataset } from "./data.js";
import { UserModel } from "./model.js";

export const UserQuery = {
  users: async (parent, args) => {
    // return UserDataset;

    const users = await UserModel.find().lean();
    return users;
  },

  user: async (parent, args) => {
    // const filteredUserArr = UserDataset.filter((user) => {
    //   if (user.id === args.id) {
    //     return user;
    //   }
    // });
    // return filteredUserArr[0];

    const user = await UserModel.findOne({ id: args.id }).lean();
    return user;
  },

  userByEmail: async (parent, args) => {
    /**
     * Example query:-
     * query UserByEmail {
     *   userByEmail(data: {email: "Shanna@melissa.tv"}) {
     *     email
     *   }
     * }
     */
    // return UserDataset.filter((user) => {
    //   if (user.email === args.data.email) {
    //     return user;
    //   }
    // })[0];

    const user = await UserModel.findOne({ email: args.data.email }).lean();
    return user;
  },
};
