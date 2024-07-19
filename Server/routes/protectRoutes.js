const router = require("express").Router();
const { protectUser, protectAdmin } = require("../middlewares/authMiddleware");
const userVerify = require("../middlewares/verifyMiddleware");
const { checkLogin } = require("../controllers/protectControllers");

router.get("/", protectUser, userVerify, checkLogin);

router.get("/admin", protectAdmin, userVerify, checkLogin);

module.exports = router;
