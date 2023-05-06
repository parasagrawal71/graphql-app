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
        userCreate(id: Int, name: String): User,
    }

    # Inputs
    input userByEmailInput {
        email: String,
    }
`;
