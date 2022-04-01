import { Categoria } from "./Categoria"
import { User } from "./User"

export class Servico{

    public id: number
    public descricao: string
    public preco: number
    public avaliacao: number
    public foto: string

    //importação/ relacionamento

    public categoria: Categoria[]
    public criador: User[] 

}