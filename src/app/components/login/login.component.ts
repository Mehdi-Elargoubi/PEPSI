import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  form : FormGroup;
  loading = false;

  constructor(private formBuilder : FormBuilder, private _snackbar : MatSnackBar, private router : Router) {
    this.form=this.formBuilder.group({
      login : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  connecter(){
    console.log(this.form);

    const login = this.form.value.login;
    const password = this.form.value.password;

    if((login=='mehdi' && password=='mehdi') || (login=='aa' && password=='aa')){
      //Redirection vers page accueil
      this.fakeLoading();
    }
    else{
      //
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackbar.open('Login ou Mot de passe sont invalide','',{
      duration : 5000,
      horizontalPosition : 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{

      //Redirection vers page d'accueil
      // this.loading=false;

      this.router.navigate(['accueil']);
      
    },1000);
  }


}
