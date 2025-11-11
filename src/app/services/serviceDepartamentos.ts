import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Departamento } from "../models/Departamento";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceDepartamentos{
  constructor(private _http: HttpClient){

  }

  createDepartamento(departamento: Departamento): Observable<any>{
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders().set("Content-type", "application/json");
    let request = "api/Departamentos"
    let url= environment.urlDepartamento+request;
    console.log(url, json, header)
    return this._http.post(url,json, {headers:header})
  }

  getDepartamentos():Observable<Array<Departamento>>{
    let request = "api/departamentos";
    let url = environment.urlDepartamento + request;
    return this._http.get<Array<Departamento>>(url)
  }
}
