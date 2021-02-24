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

module.exports = router;
