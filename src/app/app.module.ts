import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import { FilialPipe } from './pipes/filial.pipe';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DetalhesFuncionarioComponent } from './components/detalhes-funcionario/detalhes-funcionario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { MenuComponent } from './components/menu/menu.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    FilialPipe,
    DetalhesFuncionarioComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    FuncionariosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'usuarios',
        children: [
          {
            path: '', component: UsuarioComponent
          },
          {
            path: 'cadastro', component: UsuarioFormComponent
          },
          {
            path: 'alterar/:id', component: UsuarioFormComponent
          }
        ]
      },
      {
        path: 'funcionarios',
        children: [
          {
            path: '', component: FuncionariosComponent
          },
          // {
          //   path: 'cadastro', component: FuncionarioFormComponent
          // }
        ]
      },
      {
        path: '', component: FuncionariosComponent
      }
    ])
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
