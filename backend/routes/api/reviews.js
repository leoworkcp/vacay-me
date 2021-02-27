const express = require("express");
const asyncHandler = require("express-async-handler");

const { Review, Spot, User } = require("../../db/models");

const router = express.Router();

router.get(
  // "/:id(\\d+)",
  "/",
  asyncHandler(async (req, res) => {
    const review = await Review.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(review);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id);
    const spot = await Spot.findByPk(spotId);

    const review = await Review.findAll({
      where: { spotId },
      order: [["createdAt", "DESC"]],
    });

    let newObj = [];

    let userId = [];

    review.forEach((review) => {
      userId.push(review.userId);
    });

    const user = await User.findAll({
      where: { id: userId },
    });

    review.forEach((review) => {
      let obj = {};

      obj.username = "";
      user.forEach((eachUser) => {
        if (eachUser.id == review.userId) {
          obj.username = eachUser.username;
        }
      });

      obj.description = review.description;
      obj.spotId = review.spotId;
      obj.userId = review.userId;
      obj.id = review.id;
      obj.createdAt = review.createdAt;
      obj.updatedAt = review.updatedAt;
      newObj.push(obj);
    });

    // res.json(review);
    res.json([...newObj]);
  })
);
module.exports = router;
