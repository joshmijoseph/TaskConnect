const express = require ("express");
const { registerUser, authUser } = require("../controllers/userControllers");
const router = express.Router();

router.route('/profile').post(protect,updateUserProfile)

module.exports = router;