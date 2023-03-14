const express = require("express");

const router = express.Router();
const {
  getFoods,
  getFood,
  postFood,
} = require("../controllers/foodController");

const {register, login, update, deleteUser} = require("./auth")

router.get("/", getFoods);
router.get("/:id", getFood);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").put(update);
router.route("/deleteUser").delete(deleteUser);

router.post("/", postFood);
module.exports = router;
