import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { EnumFilial } from 'src/app/model/filial.enum';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-detalhes-funcionario',
  templateUrl: './detalhes-funcionario.component.html',
  styleUrls: ['./detalhes-funcionario.component.css']
})
export class DetalhesFuncionarioComponent implements OnInit, OnChanges, OnDestroy {
  @Input() funcionario: Funcionario;
  @Output() deselecionarFuncionario = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('Componente foi inicializado');
    this.buscarInformacoesFilial();
  }

  // Sempre que o valor de um atribuo for alterado
  // A primeira vez que executa é antes do ngOnInit
  ngOnChanges(alteracoes) {
    console.log('Funcionario foi alterado: ', alteracoes);
  }

  // É executado imediatamente antes de o componente sair da tela
  ngOnDestroy() {
    console.log('Componente vai sair da tela!');
    // Salvar alguma alteração que eu tenha feito e que precisa ser persistido
    // Observables -- 
  }

  deselecionar() {
    this.deselecionarFuncionario.emit();
  }

  private buscarInformacoesFilial() {
    // Backend buscar as informações - Serviços
    alert('Filial é : ' + this.funcionario.filial);
  }
}
