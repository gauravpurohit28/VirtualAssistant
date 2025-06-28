import express from "express"
import { logout, signUp } from "../controllers/auth.controller"

const authRouter = express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",Login)
authRouter.get("/logout",logout)

export default authRouter