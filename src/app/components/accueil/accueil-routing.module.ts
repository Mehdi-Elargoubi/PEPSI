import { InitComponent } from './init/init.component';
import { AccueilComponent } from './accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeEmployeesComponent } from '../pages/employees/liste-employees/liste-employees.component';

const routes: Routes = [
  { path : 'accueil', component : AccueilComponent, children: [
      {path : 'init' , component : InitComponent},
      {path : 'liste', component : ListeEmployeesComponent },
      // {path : 'accueil', component : AccueilComponent },

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
// exports: [NavbarComponent]
