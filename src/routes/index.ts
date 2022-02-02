import { Router } from "express";
import { auth } from "../middlewares/auth";
import { authRoutes } from "./auth.routes";
import { cepRoutes } from "./cep.routes";



const routes = Router()

routes.use("/cep", auth, cepRoutes)
routes.use("/auth", authRoutes)

export { routes }