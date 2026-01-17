const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      trim: true,
      lowercase: true
    },

    timezone: {
      type: String,
      default: "UTC"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
