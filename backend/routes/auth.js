const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  createOrUpdateUser,
  currentUser,
  getAllUser,
  updateProFile,
} = require("../controllers/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, currentUser);
router.post("/admin/users", authCheck, adminCheck, getAllUser);
router.put("/user/update", updateProFile);

module.exports = router;
