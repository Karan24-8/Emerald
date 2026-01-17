const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    /* ---------- USER INPUT ---------- */
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String
    },

    deadline: {
      type: Date
    },

    estimatedDurationMinutes: {
      type: Number,
      required: true
    },

    userPriority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium"
    },

    urgency: {
      type: String,
      enum: ["Low", "Medium", "High"]
    },

    flexibility: {
      type: String,
      enum: ["Fixed", "Flexible"],
      default: "Flexible"
    },

    dependencies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
      }
    ],

    /* ---------- AI GENERATED ---------- */
    priorityScore: {
      type: Number
    },

    recommendedOrder: {
      type: Number
    },

    /* ---------- SCHEDULING ---------- */
    scheduledStart: {
      type: Date
    },

    scheduledEnd: {
      type: Date
    },

    status: {
      type: String,
      enum: ["pending", "scheduled", "completed", "skipped"],
      default: "pending"
    },

    aiRunId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AiRun"
    },

    rescheduleCount: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
