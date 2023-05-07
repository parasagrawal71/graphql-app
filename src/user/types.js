export const UserTypes = `
    # Queryable fields
    type User {
        id: Int,
        name: String,
        username: String,
        email: String,
        phone: String,
        website: String,
        address: Address
        posts: [Post]
    }
    type Address {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
    }

    # All queries
    type Query {
        users: [User]
        user(id: Int): User
        userByEmail(data: userByEmailInput): User
    }

    # Mutations
    type Mutation {
        addUser(data: addUserDataInput): User,
        updateUser(id: Int, data: updateUserDataInput): User,
    }

    # Inputs
    input userByEmailInput {
        email: String,
    }
    input addUserDataInput {
        name: String!,
        username: String!,
        email: String!,
    }
    input updateUserDataInput {
        name: String,
        phone: String,
        website: String,
        address: AddressInput,
    }
    input AddressInput {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
    }
`;
