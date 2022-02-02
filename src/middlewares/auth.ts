import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { AppError } from "../shared/http/errors/AppError";
interface IPayload {
    sub: string
}

export async function auth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, "1234") as IPayload

        if (user_id) {
            next()
        }


    } catch {
        throw new AppError("Invalid Token", 401)
    }
}