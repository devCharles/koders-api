const mongoose = require("mongoose");

const kodersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLenght: 2,
    },
    lastName: {
      type: String,
      required: true,
      minLenght: 2,
    },
    email: {
      type: String,
      required: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("koders", kodersSchema);
