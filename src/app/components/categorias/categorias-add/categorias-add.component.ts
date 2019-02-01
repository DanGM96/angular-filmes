import { Component, OnInit, Input } from '@angular/core';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-add',
  templateUrl: './categorias-add.component.html',
  styleUrls: ['./categorias-add.component.sass']
})
export class CategoriasAddComponent implements OnInit {

  @Input() categoria = {id: '', nome: ''};
  
  constructor(private api: CategoriasApiService,
              private router: Router) { }

  addCategoria() {
    this.api.addCategorias(this.categoria).subscribe((resultado) => {
      this.router.navigate['/categorias'];
    });
  }
  ngOnInit() {
  }
}
