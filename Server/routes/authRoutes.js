const router = require("express").Router();
const {
  protectUser,
  protectAdmin,
  protect,
} = require("../middlewares/authMiddleware");
const {
  registerUser,
  verifyToken,
  regenerateToken,
  login,
  loginAdmin,
  registerAdmin,
} = require("../controllers/authControllers");

router.get("/", (req, res) => {
  res.send("Auth Routes");
});

router.post("/register", registerUser);

router.post("/admin/register", registerAdmin);

router.get("/token/verify/:token", protect, verifyToken);

router.get("/token/regenerate", protect, regenerateToken);

router.post("/login", login);

router.post("/admin/login", loginAdmin);

module.exports = router;
