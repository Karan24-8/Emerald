const mongoose = require("mongoose");

const scheduleChangeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true
    },

    changeTrigger: {
      type: String,
      enum: [
        "ai_reschedule",
        "task_update",
        "new_task",
        "preference_change",
        "manual_override"
      ],
      required: true
    },

    changeReason: {
      type: String,
      required: true
    },

    oldStart: {
      type: Date
    },

    oldEnd: {
      type: Date
    },

    newStart: {
      type: Date
    },

    newEnd: {
      type: Date
    },

    aiRunId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AiRun"
    },

    changedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ScheduleChange", scheduleChangeSchema);
