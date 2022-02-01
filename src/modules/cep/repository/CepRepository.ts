import { AppError } from "../../../shared/http/errors/AppError";
import { viacep } from "../../../shared/http/axios";

import { DTOCep } from "../dtos/DTOCep";
import { ICepRepository } from "./ICepRepository";

class CepRepository implements ICepRepository {

    async listCep(cod: string): Promise<DTOCep> {


        const result = await viacep.get(`/${cod}/json`).catch(err => {
            throw new AppError("Valide o formato do CEP e certifique-se que o mesmo possua {8} dígitos.", 400)
        })

        return result.data


    }

}

export { CepRepository }