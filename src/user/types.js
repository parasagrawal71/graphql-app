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
    }
`;
