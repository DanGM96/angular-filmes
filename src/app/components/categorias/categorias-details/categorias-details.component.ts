import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Categoria } from '../../../shared/Categorias';

@Component({
  selector: 'app-categorias-details',
  templateUrl: './categorias-details.component.html',
  styleUrls: ['./categorias-details.component.sass']
})
export class CategoriasDetailsComponent implements OnInit {

  categoria: any;
  categorias: Categoria[] = [];

  constructor(private api: CategoriasApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  getCategorias() {
    this.api.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    }, err => {
      console.log(err);
    });
  }

  deletaCategoria(id) {
    this.api.deleteCategoria(id).subscribe(res => {
      this.getCategorias()
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getCategoriaPorId(id).subscribe((categoria: {}) => {
      console.log(categoria);
      this.categoria = categoria;
    });
  }
}
