import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Filmes';

  constructor(private router: Router) {}

  /*
  navigate(menu: string) {
    if (menu === 'filmes') {
      this.router.navigate(['/filmes']);
    } else if (menu === 'categorias') {
      this.router.navigate(['/categorias']);
    } else if (menu === 'logout') {
      this.logout();
    } else if (menu === 'tipo-servicos') {
      this.router.navigate(['/tipo-servicos']);
    }
  }*/

  logout(): void {
    localStorage.setItem("usuarioLogado", "");
    this.router.navigate(['/login']);
  }
}