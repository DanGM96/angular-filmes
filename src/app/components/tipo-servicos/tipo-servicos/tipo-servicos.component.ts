import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TipoServico } from '../../../shared/TipoServico';
import { TipoServicoService } from '../../../services/tipo-servico.service';

@Component({
  selector: 'app-tipo-servicos',
  templateUrl: './tipo-servicos.component.html',
  styleUrls: ['./tipo-servicos.component.sass']
})
export class TipoServicosComponent implements OnInit {
  titulo = 'Lista de Tipo de Servicos';
  tipoServicos: TipoServico[] = [];
  
  constructor(private api: TipoServicoService,
              private router: Router) { }
 
  add() {
    this.router.navigate(['/tipo-servicos-add']);
  }

  getTipoServicos() {
      this.api.getTipoServicos().subscribe(tipoServicos => {
        this.tipoServicos = tipoServicos;
        console.log(this.tipoServicos);
      }, err => {
        console.log(err);
      });
  }

  deletaTipoServico(id) {
    this.api.deleteTipoServico(id).subscribe(res => {
      this.getTipoServicos()
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    console.log('');
    this.getTipoServicos();
  }
}
