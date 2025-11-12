import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import { ServiceDepartamentos } from '../../services/serviceDepartamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editdepartamento.component',
  standalone: false,
  templateUrl: './editdepartamento.component.html',
  styleUrl: './editdepartamento.component.css',
})
export class EditdepartamentoComponent implements OnInit {
  public departamentoNuevo! : Departamento
  public departamento! : Departamento
  public id! : number;
  constructor(private _service : ServiceDepartamentos, private _activeRoute : ActivatedRoute, private _router: Router){
    this.departamentoNuevo = new Departamento(0, "", "");
  }

  ngOnInit(): void {
    console.log(this.departamentoNuevo)
    this._activeRoute.params.subscribe((params : Params) => {
      let id = parseInt(params["id"]);
      // this._service.findDepartamento(id).subscribe(res => {
      //   this.departamento = res
      // })
      this.departamentoNuevo.numero = id;
    })
  }

  editDept(): void{

    this._service.updateDepartamento(this.departamentoNuevo).subscribe(res => {
      console.log("edit")
      //this._router.navigate(['/details'],this.departamentoNuevo.numero,this.departamentoNuevo.nombre,this.departamentoNuevo.localidad);
      this._router.navigate(['/details/'+this.departamentoNuevo.numero+'/'+this.departamentoNuevo.nombre+'/'+this.departamentoNuevo.localidad]);
    })

  }
}
