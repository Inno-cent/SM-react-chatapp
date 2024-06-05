import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import CTASC from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;

  try{
    if(password != confirmPassword){
        return res.status(400).json({ error : "Password does not match"})
    }
  }
  catch{
    
  }
};
