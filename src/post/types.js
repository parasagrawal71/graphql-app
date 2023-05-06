export const PostTypes = `
    # Queryable fields
    type Post {
        userId: Int,
        id: Int,
        title: String,
        body: String,
        comments: [Comment],
        user: User,
    }

    # All queries
    type Query {
        posts: [Post],
        post(id: Int): Post
    }
`;
