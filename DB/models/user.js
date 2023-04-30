const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    appointmentDate: {
      type: String,
      required: true,
    },
    startTime: {
      type: Array, //take starttime in gap of 30 mins as default
      required: true,
    },
    endTime: {
      type: Array, //take starttime in gap of 30 mins as default
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
