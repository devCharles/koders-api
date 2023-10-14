const createError = require("http-errors");

const jwt = require("../lib/jwt");

function auth(request, response, next) {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      throw createError(400, "Token required");
    }

    const token = authorization.replace("Bearer ", "");
    const payload = jwt.verify(token);

    console.log("payload: ", payload);

    next();
  } catch (error) {
    response.status(401).json({
      message: error.message || "unknown",
    });
  }
}

module.exports = auth;
