import { EmployeeService } from './../../../../services/employee.service';
import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder,Validator, ControlValueAccessor, AbstractControl, NgControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class RecrutementComponent implements OnInit  {

  listeSexe = ["--","Homme", "Femme"];
  employeeForm! : FormGroup;
  actionBtn : String = "Ajouter"
  constructor(private formBuilder : FormBuilder, private employeeService : EmployeeService,
              @Inject(MAT_DIALOG_DATA) public editData : any,
              private dialogRef : MatDialogRef<RecrutementComponent>) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      nom : ['',Validators.required],
      prenom : ['',Validators.required],
      date_naiss : ['',Validators.required],
      email : ['',Validators.required],
      cin : ['',Validators.required],
      hiredate : ['',Validators.required],

      prenom2 : [''],
      img : [''],
      typeSexe : [''],
      typeSituation : [''],
      lieu_naiss : [''],
      pays : [''],
      ville : [''],
      nationalite : [''],
      langue : [''],
      adress : [''],
      passeport : [''],
      id_ass : [''],
      id_sec : [''],
      nom_contact : [''],
      rel_contact : [''],
      adress_contact : [''],
      id : [''],
      poste : [''],
      motif : [''],
      nom_respo : [''],
      id_respo : [''],
      mail_respo : [''],
      nom_entre : [''],
      add_entre : [''],


    });

    console.log(this.editData)
    if((this.editData)){
      this.actionBtn = "Modifier"
      this.employeeForm.controls['nom'].setValue(this.editData.nom)

    }
  }

  // addEmployee(){
  //   if(this.employeeForm.valid){
  //     console.log(this.employeeForm.value)
  //     this.employeeService.addEmployee(this.employeeForm.value)
  //     .subscribe({
  //       next:(res)=>{
  //         alert('Collaborateur ajouter avec succès')

  //       },
  //       error:()=>{
  //         alert("Erreur de l'ajout du collaborateur")
  //       }
  //     })
  //   }
  // }

  addEmployee(){
    // if(this.employeeForm.valid){
      console.log(this.employeeForm.value)
      this.employeeService.addEmployee(this.employeeForm.value)
      .subscribe({
        next:(res)=>{
          alert('Collaborateur ajouter avec succès')
          this.employeeForm.reset();
          this.dialogRef.close()
        },
        error:()=>{
          alert("Erreur de l'ajout du collaborateur")
        }
      })
    // }else{ this.}
  }



// Email validation
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Veuillez saisir une valeur';
    }

    return this.email.hasError('email') ? 'Email non valid' : '';
  }

// diviseur param s
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }



}


