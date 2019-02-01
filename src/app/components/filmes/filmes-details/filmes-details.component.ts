import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/filmes-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from '../../../shared/Filmes';

@Component({
  selector: 'app-filmes-details',
  templateUrl: './filmes-details.component.html',
  styleUrls: ['./filmes-details.component.sass']
})
export class FilmesDetailsComponent implements OnInit {

  filme: any;
  filmes: Filme[] = [];

  constructor(private api: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  getFilmes() {
    this.api.getFilmes().subscribe(filmes => {
      this.filmes = filmes;
      console.log(this.filmes);
    }, err => {
      console.log(err);
    });
  }

  deletaFilme(id) {
    this.api.deleteFilme(id).subscribe(res => {
      this.getFilmes()
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getFilmePorId(id).subscribe((filme: {}) => {
      console.log(filme);
      this.filme = filme;
    });
  }
}
