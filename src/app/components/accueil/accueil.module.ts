import { ListeEmployeesComponent } from './../pages/employees/liste-employees/liste-employees.component';
import { RecrutementComponent } from './../pages/employees/recrutement/recrutement.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { InitComponent } from './init/init.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    InitComponent,
    NavbarComponent


  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule

  ],
  exports: [
    NavbarComponent
  ]
})
export class AccueilModule { }
