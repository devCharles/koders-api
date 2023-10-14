const express = require("express");

const koders = require("../usecases/koders.usecase");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const allKoders = await koders.getAll();

    response.json({
      message: "complete koders list",
      data: {
        koders: allKoders,
      },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      message: error.message || "unknown",
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const koderFound = await koders.getById(id);

    response.json({
      message: "Koder found",
      data: { koder: koderFound },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      message: error.message || "unknown",
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const koderData = request.body;

    const newKoder = await koders.create(koderData);

    response.json({
      message: "koder created",
      data: { koder: newKoder },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      message: error.message || "unknown",
    });
  }
});

router.delete("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const koderDeleted = await koders.deleteById(id);
    response.json({
      message: "koder deleted",
      data: { koder: koderDeleted },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      message: error.message || "unknown",
    });
  }
});

router.patch("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const koderData = request.body;

    const koderUpdated = await koders.updateById(id, koderData);

    response.json({
      message: "koder updated",
      data: { koder: koderUpdated },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      message: error.message || "unknown",
    });
  }
});

module.exports = router;
