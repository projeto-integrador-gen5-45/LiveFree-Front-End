import { Servico } from "./Servico"

export class User {

public id: number
public nome:	string
public email:	string
public senha:	string
public usuario:	string
public cidade:	string
public idioma:	string

//importação/ relacionamento
public meusServicos: Servico[]

}