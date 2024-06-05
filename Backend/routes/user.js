import { signup } from "../controller/user.controller";
import express from "express";
const router = express.Router();

router.post("/signup", signup);
