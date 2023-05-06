import { UserDataset } from "./db.js";

export const UserQuery = {
  users: (parent, args) => {
    return UserDataset;
  },

  user: (parent, args) => {
    const filteredUserArr = UserDataset.filter((user) => {
      if (user.id === args.id) {
        return user;
      }
    });
    return filteredUserArr[0];
  },

  userByEmail: (parent, args) => {
    /**
     * Example query:-
     * query UserByEmail {
     *   userByEmail(data: {email: "Shanna@melissa.tv"}) {
     *     email
     *   }
     * }
     */
    return UserDataset.filter((user) => {
      if (user.email === args.data.email) {
        return user;
      }
    })[0];
  },
};
