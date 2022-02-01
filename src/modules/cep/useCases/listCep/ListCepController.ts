import { Request, Response } from "express";
import { AppError } from "../../../../shared/http/errors/AppError";

import { ListCepUseCase } from "./ListCepUseCase";

class ListCepController {

    constructor(
        private listCepUserCase: ListCepUseCase
    ) { }

    async handle(req: Request, res: Response) {
        const { cod } = req.params
        const list = await this.listCepUserCase.execute(cod)

        return res.json(list)

    }
}

export { ListCepController }