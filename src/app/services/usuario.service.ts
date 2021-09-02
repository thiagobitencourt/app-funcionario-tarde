import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnumFilial } from '../model/filial.enum';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioLogado: Usuario; // undefined

  constructor(private http: HttpClient) {}

  obterUsuarioLogado(): Usuario {
    return this.usuarioLogado; 
  }

  fazerLogin(senha) {
    if (senha === 'admin') {
      this.usuarioLogado = {
        nome: 'Roberto',
        sobrenome: 'Carlos',
        email: 'reberto.carlos@realmadrid.com.es',
        filial: EnumFilial.FILIAL_B
      }
    } else {
      console.error('Senha inválida!');
    }
  }

  fazerLougout() {
    this.usuarioLogado = null;
  }

  adicionarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:3000/usuarios', usuario);
  }

  alterUsuario(idUsuario, usuario) {
    return this.http.put(`http://localhost:3000/usuarios/${idUsuario}`, usuario);
  }

  obterInformacoesUsuario(idUsuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:3000/usuarios/${idUsuario}`);
  }

  obterUsuarios(): Observable<Usuario[]> {
    console.log('Vai fazer a requisição para o backend');
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios');
  }
}
