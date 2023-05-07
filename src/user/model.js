import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    username: { type: String },
    email: { type: String },
    phone: { type: String },
    website: { type: String },
    address: {
      street: { type: String },
      suite: { type: String },
      city: { type: String },
      zipcode: { type: String },
    },
  },
  { timestamps: true }
);

UserSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  this.options.new = true;
  next();
});

const UserModel = mongoose.model("User", UserSchema, "users");
export { UserModel };
