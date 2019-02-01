import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../services/filmes-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Filme } from '../../../shared/Filmes';

@Component({
  selector: 'app-filmes-edit',
  templateUrl: './filmes-edit.component.html',
  styleUrls: ['./filmes-edit.component.sass']
})
export class FilmesEditComponent implements OnInit {

  @Input() filme = new Filme;

    constructor(private api: ApiService,
                private router: Router,
                private route: ActivatedRoute) { }

  updateFilme() {
    let id = this.route.snapshot.params['id'];
    this.api.updateFilme(id, this.filme).subscribe((filme) => {
      this.router.navigate(['/filmes-details/' + filme.id]);
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getFilmePorId(id).subscribe((filme: Filme) => {
      console.log(filme);
      this.filme = filme;
    });
  }
}
