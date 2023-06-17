import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AutorlistComponent } from './pages/autorlist/autorlist.component';
import { LoginComponent } from './pages/login/login.component';
import { ObrasfavoritasComponent } from './pages/obrasfavoritas/obrasfavoritas.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutorlistComponent,
    LoginComponent,
    ObrasfavoritasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule,
    AppRoutingModule
  ],
  exports:[
    AutorlistComponent,
    LoginComponent,
    ObrasfavoritasComponent
  ]
})
export class AutorModule { }
