import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Categoria } from '../../../shared/Categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.sass']
})
export class CategoriasComponent implements OnInit {
  titulo = 'Categorias';
  categorias: Categoria[] = [];

  constructor(private api: CategoriasApiService,
              private router: Router) { }

  add() {
    this.router.navigate(['/categorias-add']);
  }

  getCategorias() {
    this.api.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    }, err => {
      console.log(err);
    });
  }
  
  ngOnInit() {
    console.log('');
    this.getCategorias();
  }

}
