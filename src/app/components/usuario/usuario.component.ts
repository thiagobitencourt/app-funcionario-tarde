import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnumFilial } from 'src/app/model/filial.enum';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;

  // Injeção de dependencias
  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    // this.usuario = this.usuarioService.obterUsuarioLogado();
  }

  entrar() {
    // this.usuarioService.fazerLogin('admin');
    
    // Observable
    this.usuarioService.obterInformacoesUsuario(1)
      .subscribe(
        (usuario: Usuario) => {
          console.log('USUARIO-COMPONENTE -> Pronto, peguei o usuario:', usuario);
          this.usuario = usuario;
        }
      );
    
    console.log('USUARIO-COMPONENTE -> Não fica esperando, segue a vida');
  }

  criarUsuario() {
    // redirecionar para a página criar usuário
    this.router.navigate(['usuarios', 'cadastro']);
  }

  editarUsuario() {
    this.router.navigate(['usuarios', 'alterar', 1]);
  }

  sair() {
    this.usuarioService.fazerLougout();
    this.usuario = this.usuarioService.obterUsuarioLogado();
  }
}
