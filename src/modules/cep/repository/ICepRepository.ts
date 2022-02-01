import { DTOCep } from "../dtos/DTOCep";

interface ICepRepository {
    listCep(cod: string): Promise<DTOCep>
}

export { ICepRepository }