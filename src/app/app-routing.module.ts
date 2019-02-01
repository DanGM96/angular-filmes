import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './components/filmes/filmes/filmes.component';
import { FilmesAddComponent } from './components/filmes/filmes-add/filmes-add.component';
import { FilmesDetailsComponent } from './components/filmes/filmes-details/filmes-details.component';
import { FilmesEditComponent } from './components/filmes/filmes-edit/filmes-edit.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';
import { CategoriasAddComponent } from './components/categorias/categorias-add/categorias-add.component';
import { CategoriasDetailsComponent } from './components/categorias/categorias-details/categorias-details.component';
import { CategoriasEditComponent } from './components/categorias/categorias-edit/categorias-edit.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TipoServicosComponent } from './components/tipo-servicos/tipo-servicos/tipo-servicos.component';
import { TipoServicosAddComponent } from './components/tipo-servicos/tipo-servicos-add/tipo-servicos-add.component';
import { TipoServicosDetailsComponent } from './components/tipo-servicos/tipo-servicos-details/tipo-servicos-details.component';
import { TipoServicosEditComponent } from './components/tipo-servicos/tipo-servicos-edit/tipo-servicos-edit.component';

const routes: Routes = [
  //Filmes
  {
    path: 'filmes',
    component: FilmesComponent,
    data: { title: 'Lista de Filmes' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'filmes-add',
    component: FilmesAddComponent,
    data: { title: 'Adicao de Filmes' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'filmes-details/:id',
    component: FilmesDetailsComponent,
    data: { title: 'Detalhes de Filmes' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'filmes-edit/:id',
    component: FilmesEditComponent,
    data: { title: 'Edicao de Filmes' },
    canActivate: [AuthGuardService]
  },
  //Categorias
  {
    path: 'categorias',
    component: CategoriasComponent,
    data: { title: 'Categorias' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'categorias-add',
    component: CategoriasAddComponent,
    data : {title: 'Adicao de Categorias' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'categorias-details/:id',
    component: CategoriasDetailsComponent,
    data: { title: 'Detalhes de Categorias' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'categorias-edit/:id',
    component: CategoriasEditComponent,
    data: { title: 'Edicao de Categorias' },
    canActivate: [AuthGuardService]
  },
  //Tipo de Servicos
  {
    path: 'tipo-servicos',
    component: TipoServicosComponent,
    data: { title: 'Lista de Tipo de Servicos' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'tipo-servicos-add',
    component: TipoServicosAddComponent,
    data: { title: 'Adicao de Tipo de Servicos' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'tipo-servicos-details/:id',
    component: TipoServicosDetailsComponent,
    data: { title: 'Detalhes de Tipo de Servicos' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'tipo-servicos-edit/:id',
    component: TipoServicosEditComponent,
    data: { title: 'Edicao de Tipo de Servicos' },
    canActivate: [AuthGuardService]
  },
  //Login
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
