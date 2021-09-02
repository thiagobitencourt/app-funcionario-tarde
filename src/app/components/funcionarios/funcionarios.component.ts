import { Component, OnInit } from '@angular/core';
import { EnumFilial } from 'src/app/model/filial.enum';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario;

  linkSiteNoticias: string = 'http://globo.com';

  constructor() {}

  ngOnInit() {
    this.funcionarios = this.obterFuncionarios();
  }

  selecionarFuncionario(funcionario: any) {
    this.funcionarioSelecionado = funcionario;
    this.linkSiteNoticias = 'http://angular.io';
  }

  deselecionarFuncionario() {
    this.funcionarioSelecionado = null;
  }

  mostrarDetalhes(nome) {
    alert('Nome do funcionário: ' + nome);
  }

  removerUltimoFuncionario() {
    this.funcionarios.pop();
  }

  adicionarFuncionario() {
    const novoFuncionario = {
      nome: 'Lula da Silv',
      filial: EnumFilial.FILIAL_C,
      dataAdmissao: new Date('01/01/2002'),
      cargo: 'Presidente',
      salario: 25345
    };
    this.funcionarios.unshift(novoFuncionario);
  }

  removerTodosFuncionarios() {
    this.funcionarios = [];
  }

  removerFuncionario(funcionario) {
    const indiceFuncionario = this.funcionarios.indexOf(funcionario);
    // Se não encontrar ->   -1 
    if (indiceFuncionario > -1) {
      this.funcionarios.splice(indiceFuncionario, 1);
    }
  }

  obterFuncionarios() : Funcionario[] {
    // Buscar os funcionários no backend
    return [
      {
        nome: 'João da Silva',
        filial: EnumFilial.MATRIZ,
        dataAdmissao: new Date('10/05/2001'),
        cargo: 'Estagiário Senior',
        salario: 52651,
        estaFerias: false
      },
      {
        nome: 'Lucas alberto',
        filial: EnumFilial.FILIAL_B,
        dataAdmissao: new Date('10/05/2002'),
        cargo: 'Suporte',
        salario: 5685.49
      },
      {
        nome: 'Jairo',
        filial: EnumFilial.MATRIZ,
        dataAdmissao: new Date('06/18/1998'),
        cargo: 'Diretor',
        salario: 154658
      },
      {
        nome: 'Ivete Sangalo',
        filial: EnumFilial.FILIA_A,
        dataAdmissao: new Date('2021-05-22'),
        cargo: 'Assistente de palco',
        salario: 5985.17
      }
    ];
  }
}
