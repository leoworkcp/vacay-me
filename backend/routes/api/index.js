// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);

//<----------------------------------------------------------------------->//
// Test User Auth Middlewares
// test the setTokenCookie function
// GET /api/set-token-cookie
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");

const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");

// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "Demo-lition",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// // test the restoreUser
// // GET /api/restore-user
// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// //  test your requireAuth
// // GET /api/require-auth
// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });

module.exports = router;
