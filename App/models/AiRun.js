const mongoose = require("mongoose");

const aiRunSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    runType: {
      type: String,
      enum: ["daily_schedule", "weekly_schedule", "manual"],
      required: true
    },

    taskIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
      }
    ],

    trigger: {
      type: String,
      enum: ["manual", "auto"],
      default: "manual"
    },

    status: {
      type: String,
      enum: ["success", "failed"],
      default: "success"
    },

    startedAt: {
      type: Date,
      default: Date.now
    },

    completedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AiRun", aiRunSchema);
