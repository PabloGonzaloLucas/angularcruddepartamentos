import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomedepartamentosComponent } from './components/homedepartamentos.component/homedepartamentos.component';
import { CreatedepartamentoComponent } from './components/createdepartamento.component/createdepartamento.component';
import { UpdatedepartamentoComponent } from './components/updatedepartamento.component/updatedepartamento.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamentos } from './services/serviceDepartamentos';
import { DetailsdepartamentoComponent } from './components/detailsdepartamento.component/detailsdepartamento.component';

@NgModule({
  declarations: [
    App,
    HomedepartamentosComponent,
    CreatedepartamentoComponent,
    UpdatedepartamentoComponent,
    MenuComponent,
    DetailsdepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceDepartamentos
  ],
  bootstrap: [App]
})
export class AppModule { }
