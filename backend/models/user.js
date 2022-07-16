const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    picture: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    //   wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
