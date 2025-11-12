import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomedepartamentosComponent } from './components/homedepartamentos.component/homedepartamentos.component';
import { CreatedepartamentoComponent } from './components/createdepartamento.component/createdepartamento.component';
import { DetailsdepartamentoComponent } from './components/detailsdepartamento.component/detailsdepartamento.component';
import { EditdepartamentoComponent } from './components/editdepartamento.component/editdepartamento.component';

const routes: Routes = [
  {path:"", component:HomedepartamentosComponent},
  {path:"create", component:CreatedepartamentoComponent},
  {path:"details/:id/:nombre/:localidad", component:DetailsdepartamentoComponent},
  {path:"edit/:id", component:EditdepartamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
