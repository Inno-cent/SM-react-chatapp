import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import CTASC from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password does not match" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }

    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    if (newUser) {
      CTASC(newUser._id, res);
      res.status(201).json({
        message: " user created successfully",
        user: {
          _id: newUser._id,
          fullname: newUser.fullname,
          email: newUser.email,
        },
      });
    }
  } catch {}
};
