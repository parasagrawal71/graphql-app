export const PostTypes = `
    # Queryable fields
    type Post {
        userId: Float,
        id: Float,
        title: String,
        body: String,
    }

    # All queries
    type Query {
        posts: [Post]
    }
`;
