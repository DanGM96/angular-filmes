import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../../../shared/Categorias';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias-edit',
  templateUrl: './categorias-edit.component.html',
  styleUrls: ['./categorias-edit.component.sass']
})
export class CategoriasEditComponent implements OnInit {

  @Input() categoria = new Categoria;

    constructor(private api: CategoriasApiService,
                private router: Router,
                private route: ActivatedRoute) { }

  updateCategoria() {
    let id = this.route.snapshot.params['id'];
    this.api.updateCategoria(id, this.categoria).subscribe((categoria) => {
      this.router.navigate(['/categorias-details/' + categoria.id]);
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getCategoriaPorId(id).subscribe((categoria: Categoria) => {
      console.log(categoria);
      this.categoria = categoria;
    });
  }
}
