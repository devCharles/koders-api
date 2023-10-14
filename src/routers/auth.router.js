const express = require("express");

const auth = require("../usecases/auth.usecases");

const router = express.Router();

router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const token = await auth.login(email, password);

    response.json({
      message: "user logged in",
      data: { token },
    });
  } catch (error) {
    response.status(401).json({
      message: error.message || "nel papa",
    });
  }
});

module.exports = router;
