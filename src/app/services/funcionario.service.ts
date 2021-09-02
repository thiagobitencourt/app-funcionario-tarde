import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  /*
    app.module.ts
      import { HttpClientModule } from '@angular/common/http';

      imports: [
        BrowserModule,
        HttpClientModule
      ],

  */

  constructor(private http: HttpClient) {}

  listarFuncionarios(): Observable<Funcionario[]> {}

  obterDadosFuncionario(id: number): Observable<Funcionario> {}

  adicionarFuncionario(funcionario: Funcionario) : Observable<Funcionario> {}

  removerFuncionario(id: number) : Observable<Funcionario> {}

  alterarFuncionario(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`http://localhost:3000/funcionarios/${id}`, funcionario);
  }
}
