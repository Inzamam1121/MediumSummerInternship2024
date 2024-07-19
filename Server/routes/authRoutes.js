const router = require("express").Router();
const { protectUser, protectAdmin } = require("../middlewares/authMiddleware");
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

router.get("/token/verify/:token", protectUser, verifyToken);

router.get("/admin/token/verify/:token", protectAdmin, verifyToken);

router.get("/token/regenerate", protectUser, regenerateToken);

router.get("/admin/token/regenerate", protectAdmin, regenerateToken);

router.post("/admin/login", loginAdmin);

module.exports = router;
