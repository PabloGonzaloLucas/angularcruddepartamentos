import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/serviceDepartamentos';
import { Departamento } from '../../models/Departamento';
@Component({
  selector: 'app-homedepartamentos.component',
  standalone: false,
  templateUrl: './homedepartamentos.component.html',
  styleUrl: './homedepartamentos.component.css',
})
export class HomedepartamentosComponent implements OnInit{
  public departamentos! : Array<Departamento>;
  constructor(private _service : ServiceDepartamentos){

  }

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(res=>{
      this.departamentos = res
    })
  }


}
