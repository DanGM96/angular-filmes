import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../services/filmes-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmes-add',
  templateUrl: './filmes-add.component.html',
  styleUrls: ['./filmes-add.component.sass']
})
export class FilmesAddComponent implements OnInit {

  @Input() filme = {id: '', nome: '', descricao: ''};
  
  constructor(private api: ApiService,
              private router: Router) { }

  addFilme() {
    this.api.addFilmes(this.filme).subscribe((resultado) => {
      this.router.navigate['/filmes'];
    });
  }
  ngOnInit() {
  }
}
