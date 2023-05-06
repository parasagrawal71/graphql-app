export const PostTypes = `
    # Queryable fields
    type Post {
        userId: Int,
        id: Int,
        title: String,
        body: String,
    }

    # All queries
    type Query {
        posts: [Post]
    }
`;
