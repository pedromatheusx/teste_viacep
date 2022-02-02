import { Router } from "express";
import { sign } from "jsonwebtoken";
import { AppError } from "../shared/http/errors/AppError";
import data from "./../../db.json"

const authRoutes = Router()


authRoutes.post("/", (req, res) => {

    const { email, password } = req.body

    if (email != data.email) {
        throw new AppError("Email or password incorrent", 400)
    }

    if (password != data.password) {
        throw new AppError("Email or password incorrent", 400)
    }

    const token = sign({}, "1234", {
        subject: `${data.id}`,
        expiresIn: "1d"
    })

    return res.json({ "token": token })

})


export { authRoutes }