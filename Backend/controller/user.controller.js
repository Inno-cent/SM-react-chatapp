import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import CTASC from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;
};
