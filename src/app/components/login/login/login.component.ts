import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../shared/Usuarios';
import { Router } from '@angular/router';
import { UsuariosApiService } from '../../../services/usuarios-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario;

  constructor(private api: UsuariosApiService,
              private router: Router) { }

  login(): void {
    if(this.usuario.usuario === 'admin' && this.usuario.password === 'admin') {
      localStorage.setItem("usuarioLogado", "master");
      this.router.navigate(["filmes"]);
    } else {
      alert("Login inválido");
    }
  }

  ngOnInit() {
  }

}
