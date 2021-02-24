const express = require("express");
const asyncHandler = require("express-async-handler");

const { Spot } = require("../../db/models");

const { handleValidationErrors } = require("../../utils/validation");

const { check } = require("express-validator");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json({ spots });
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const spot = await Spot.findOne({
      where: { id: req.params.id },
      order: [["createdAt", "DESC"]],
    });
    // console.log(spot.id);
    // console.log(spot.title);
    res.json(spot);
  })
);

module.exports = router;
