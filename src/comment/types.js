export const CommentTypes = `
    # Queryable fields
    type Comment {
        postId: Int,
        id: Int,
        name: String,
        email: String,
        body: String,
    }

    # All queries
    type Query {
        comments: [Comment]
    }
`;
