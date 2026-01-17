const mongoose = require("mongoose");

const userPreferencesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    workingHours: {
      start: { type: String, required: true }, // "09:00"
      end: { type: String, required: true }     // "18:00"
    },

    workDays: {
      type: [String],
      default: ["Mon", "Tue", "Wed", "Thu", "Fri"]
    },

    lunchBreak: {
      start: { type: String },
      end: { type: String }
    },

    breakDurationMinutes: {
      type: Number,
      default: 10
    },

    maxTasksPerDay: {
      type: Number,
      default: 6
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserPreferences", userPreferencesSchema);
