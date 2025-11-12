import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/Departamento';
@Component({
  selector: 'app-detailsdepartamento.component',
  standalone: false,
  templateUrl: './detailsdepartamento.component.html',
  styleUrl: './detailsdepartamento.component.css',
})
export class DetailsdepartamentoComponent implements OnInit{
  public departamento!: Departamento;
  constructor(private _activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params["id"]);
      let nombre = params["nombre"];
      let localidad = params["localidad"];
      this.departamento = new Departamento(id, nombre, localidad);
    })
  }
}
