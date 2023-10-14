const bcrypt = require("bcrypt");

const saltRounds = 10;

function hash(text) {
  return bcrypt.hash(text, saltRounds);
}

function compare(text, hash) {
  return bcrypt.compare(text, hash);
}

module.exports = {
  hash,
  compare,
};
