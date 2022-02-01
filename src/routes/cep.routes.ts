import { Router } from "express";
import listCepController from "../modules/cep/useCases/listCep/";


const cepRoutes = Router()

cepRoutes.post("/:cod", (req, res) => {
    return listCepController().handle(req, res)
})


export { cepRoutes }