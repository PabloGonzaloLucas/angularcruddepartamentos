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

  loadDepartamentos():void{
    this._service.getDepartamentos().subscribe(res=>{
      this.departamentos = res
    })
  }

  ngOnInit(): void {
    this.loadDepartamentos()
  }

  deleteDepartamento(id:number): void{
    this._service.deleteDepartamento(id).subscribe(res => {
      console.log("delete");
      this.loadDepartamentos();
    })
  }


}
