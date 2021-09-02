import { Pipe, PipeTransform } from '@angular/core';
import { EnumFilial } from '../model/filial.enum';

// {{ funcionario.filial | filial }}

@Pipe({
  name: 'filial'
})
export class FilialPipe implements PipeTransform {
  transform(filial: EnumFilial, mostrarCodigo: boolean): string {
    switch(filial) {
      case EnumFilial.MATRIZ: {
        return mostrarCodigo ? '01': 'Matriz';
      }
      case EnumFilial.FILIA_A: {
        return mostrarCodigo ? '02': 'Filial a';
      }
      case EnumFilial.FILIAL_B: {
        return mostrarCodigo ? '03' : 'Filial b';
      }
      default: return mostrarCodigo ? '00' : 'Filial desconhecida';
    }
  }
}
