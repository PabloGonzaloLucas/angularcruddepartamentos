import { Component } from '@angular/core';
import { ServiceDepartamentos } from '../../services/serviceDepartamentos';
import { Departamento } from '../../models/Departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createdepartamento.component',
  standalone: false,
  templateUrl: './createdepartamento.component.html',
  styleUrl: './createdepartamento.component.css',
})
export class CreatedepartamentoComponent {
  public departamento : Departamento

  constructor(private _service : ServiceDepartamentos, private _router:Router)
  {
    this.departamento= {
      numero:0,
      nombre:"",
      localidad:""
    }
  }

  crearDept(): void{
    this._service.createDepartamento(this.departamento).subscribe(res=>{
      console.log(res)
      this._router.navigate(['/'])
    })
  }
}
