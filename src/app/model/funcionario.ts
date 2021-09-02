import { EnumFilial } from './filial.enum';

export interface Funcionario {
  nome: string;
  filial: EnumFilial;
  dataAdmissao: Date;
  cargo: string;
  salario: number;
  estaFerias?: boolean;
}
