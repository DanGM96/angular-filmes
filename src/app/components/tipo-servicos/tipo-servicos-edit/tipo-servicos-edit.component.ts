import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoServico } from '../../../shared/TipoServico';
import { TipoServicoService } from '../../../services/tipo-servico.service';

@Component({
  selector: 'app-tipo-servicos-edit',
  templateUrl: './tipo-servicos-edit.component.html',
  styleUrls: ['./tipo-servicos-edit.component.sass']
})
export class TipoServicosEditComponent implements OnInit {

  @Input() tipoServico = new TipoServico;

    constructor(private api: TipoServicoService,
                private router: Router,
                private route: ActivatedRoute) { }

  updateTipoServico() {
    let id = this.route.snapshot.params['id'];
    this.api.updateTipoServico(id, this.tipoServico).subscribe((tipoServico) => {
      this.router.navigate(['/tipoServicos-details/' + tipoServico.id]);
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getTipoServicoPorId(id).subscribe((tipoServico: TipoServico) => {
      console.log(tipoServico);
      this.tipoServico = tipoServico;
    });
  }
}
