import mongoose from "mongoose";

const LOCAL_MONGODB = `mongodb://localhost:27017/graphql-app`;

const connectDatabase = () => {
  const databaseUrl = process.env.MONGODB_URI || LOCAL_MONGODB;

  return mongoose
    .connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((e) => {
      console.log("Could not connect to the database. Exiting now...", e);
      process.exit();
    });
};

connectDatabase();

mongoose.connection.on("connected", () => {
  console.log("Database is connected!!!!");
});
