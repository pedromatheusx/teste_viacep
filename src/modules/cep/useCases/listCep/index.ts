import { CepRepository } from "../../repository/CepRepository";
import { ListCepController } from "./ListCepController";
import { ListCepUseCase } from "./ListCepUseCase";

export default () => {
    const cepRepository = new CepRepository()
    const listCepUseCase = new ListCepUseCase(cepRepository)
    const listCepController = new ListCepController(listCepUseCase)

    return listCepController
}