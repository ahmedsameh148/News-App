import mongoose from "mongoose";

const userTokensSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
    required: true,
  },
});

// validation and save password

const UserToken = mongoose.model("UserTokens", userTokensSchema);
module.exports = UserToken;
