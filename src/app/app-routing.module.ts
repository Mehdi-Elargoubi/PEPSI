import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/accueil/navbar/navbar.component';
import { ListeEmployeesComponent } from './components/pages/employees/liste-employees/liste-employees.component';

const routes: Routes = [
  { path: '', redirectTo:'login' , pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'liste', component: ListeEmployeesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'accueil', loadChildren : ()=> import('./components/accueil/accueil.module').then(x => x.AccueilModule) },
  { path: '**', redirectTo:'login' , pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
