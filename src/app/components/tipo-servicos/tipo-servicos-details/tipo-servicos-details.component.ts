import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoServico } from '../../../shared/TipoServico';
import { TipoServicoService } from '../../../services/tipo-servico.service';

@Component({
  selector: 'app-tipo-servicos-details',
  templateUrl: './tipo-servicos-details.component.html',
  styleUrls: ['./tipo-servicos-details.component.sass']
})
export class TipoServicosDetailsComponent implements OnInit {

  tipoServico: any;
  tipoServicos: TipoServico[] = [];

  constructor(private api: TipoServicoService,
    private router: Router,
    private route: ActivatedRoute) { }

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
    let id = this.route.snapshot.params['id'];
    this.api.getTipoServicoPorId(id).subscribe((tipoServico: {}) => {
      console.log(tipoServico);
      this.tipoServico = tipoServico;
    });
  }
}
