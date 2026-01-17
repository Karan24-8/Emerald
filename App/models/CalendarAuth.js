const mongoose = require("mongoose");

const calendarAuthSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    provider: {
      type: String,
      enum: ["google"],
      default: "google"
    },

    calendarId: {
      type: String,
      default: "primary"
    },

    accessToken: {
      type: String,
      required: true
    },

    refreshToken: {
      type: String,
      required: true
    },

    tokenExpiry: {
      type: Date,
      required: true
    },

    permissionScope: {
      type: String,
      enum: ["read", "read_write"],
      default: "read_write"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("CalendarAuth", calendarAuthSchema);
