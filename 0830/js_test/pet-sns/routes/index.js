var express = require("express");
var router = express.Router();
const authRouter = require("./auth");
const postRouter = require("./posts");
// const postCtr = require("../controller/postCtr");

// router.get("/", postCtr.list);

router.use("/auth", authRouter);
router.use("/posts", postRouter);

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
