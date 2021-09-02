import { EnumFilial } from "./filial.enum";

export interface Usuario {
  id?: number;
  nome: string;
  sobrenome: string;
  email: string;
  filial: EnumFilial
}
