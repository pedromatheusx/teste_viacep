import { DTOCep } from "../../dtos/DTOCep";
import { ICepRepository } from "../../repository/ICepRepository";

class ListCepUseCase {
    constructor(
        private cepRepository: ICepRepository
    ) {

    }

    async execute(cod: string): Promise<DTOCep> {
        const result = await this.cepRepository.listCep(cod)
        return result
    }
}

export { ListCepUseCase }