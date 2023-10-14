const createError = require("http-errors");
const Koder = require("../models/koders.model");
const encrypt = require("../lib/encrypt");
const jwt = require("../lib/jwt");

async function login(email, password) {
  const koderFound = await Koder.findOne({ email });

  if (!koderFound) {
    throw createError(401, "Nel papa");
  }

  const isValidPassword = await encrypt.compare(password, koderFound.password);

  if (!isValidPassword) {
    throw createError(401, "Nel papa");
  }

  return jwt.sign({ id: koderFound._id });
}

module.exports = {
  login,
};
