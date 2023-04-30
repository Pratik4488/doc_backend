const mongoose = require("mongoose");

const DocSchema = new mongoose.Schema(
  {
    docId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    dept: {
      type: String,
      default: "",
    },
    appointment: [
      {
        date: {
          type: String,
          default: "",
        },
        Timeslot: [
          {
            startTime: {
              type: String,
              default: "",
            },
            endTime: {
              type: String,
              default: "",
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", DocSchema);
