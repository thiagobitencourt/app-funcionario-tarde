import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

/*
  nome: string;
  sobrenome: string;
  email: string;
  filial: EnumFilial
*/

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  // texto: string; // undefined
  // inputNome: FormControl; // undefined

  usuarioForm: FormGroup; // undefined

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {

    // this.inputNome = new FormControl('Jorge'); // Controlador -> Interagi com o campo de input

    this.usuarioForm = new FormGroup({
      nome: new FormControl(null,   [Validators.required, Validators.minLength(5)]),
      sobrenome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      filial: new FormControl()
    });
  }

  ngOnInit(): void {
    // Código que pega o id do usuário dos parametros da rota/url
    // this.usuarioService.obterInformacoesUsuario(1)
    //   .subscribe((usuario: Usuario) => {
    //     // Boltou do Vackend
    //     this.usuarioForm.patchValue(usuario);
    //   });
  }

  salvar() {
    // alert('Valor do campo: ' + this.texto);
    // console.log(this.inputNome.value);
    if (this.usuarioForm.valid) {
      const novoUsuario = this.usuarioForm.getRawValue();

      this.usuarioService.adicionarUsuario(novoUsuario)
        .subscribe(() => {
          // this.usuarioForm.reset();
          this.router.navigate(['usuarios']);
        });

    } else {
      console.error('Formulário inválido!');
    }
  }

  mudarTexto() {
    // this.texto = 'Um novo valor para o campo de input';
    // this.inputNome.setValue('Marcelo');
    const novoUsuario = {
      nome: 'Thiago',
      sobrenome: 'Bitencourt',
      email: 'thiago.bitencourt@triersistemas.com.br',
      filial: 'MATRIZ'
    };

    this.usuarioForm.patchValue(novoUsuario);
  }

  verValores() {
    const usuario = this.usuarioForm.getRawValue();
    console.log(usuario);
  }
}
