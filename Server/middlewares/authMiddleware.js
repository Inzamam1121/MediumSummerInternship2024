const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
      const result = await User.findOne({
        _id: decoded.id,
      }).select("_id name email isVerified");
      if (!result) {
        return res.status(401).send("Not Authorized.");
      }
      req.user = result;
      next();
    } catch (error) {
      return res.status(401).send("Not Authorized.");
    }
  }
  if (!token) return res.status(401).send("Not Authorized.");
};

const protectUser = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
      const result = await User.findOne({
        _id: decoded.id,
        isAdmin: false,
      }).select("_id name email isVerified");
      if (!result) {
        return res.status(401).send("Not Authorized.");
      }
      req.user = result;
      next();
    } catch (error) {
      return res.status(401).send("Not Authorized.");
    }
  }
  if (!token) return res.status(401).send("Not Authorized.");
};

const protectAdmin = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
      const result = await User.findOne({
        _id: decoded.id,
        isAdmin: true,
      }).select("_id name email isVerified");
      if (!result) {
        return res.status(401).send("Not Authorized.");
      }
      req.user = result;
      next();
    } catch (error) {
      return res.status(401).send("Not Authorized.");
    }
  }
  if (!token) return res.status(401).send("Not Authorized.");
};

module.exports = { protectUser, protectAdmin, protect };
