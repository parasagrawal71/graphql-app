const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const app = express();
const PORT = process.env.PORT || 6100;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Hello",
    fields: () => ({
      message: { type: GraphQLString, resolve: () => "Hello World!!!" },
    }),
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to GraphQL app");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
