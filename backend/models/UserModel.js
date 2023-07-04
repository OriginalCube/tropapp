const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    picture: String,
    email: { type: String, require: true, unique: true },
    id: { type: String, require: true },
    birthday: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tropApp-user", UserSchema);
