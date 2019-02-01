import { Component, OnInit, Input } from '@angular/core';
import { TipoServicoService } from '../../../services/tipo-servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-servicos-add',
  templateUrl: './tipo-servicos-add.component.html',
  styleUrls: ['./tipo-servicos-add.component.sass']
})
export class TipoServicosAddComponent implements OnInit {

  @Input() tipoServico = {id: '', nome: '', descricao: ''};
  
  constructor(private api: TipoServicoService,
              private router: Router) { }

  addTipoServico() {
    this.api.addTipoServicos(this.tipoServico).subscribe((resultado) => {
      this.router.navigate['/tipo-servicos'];
    });
  }
  ngOnInit() {
  }
}
