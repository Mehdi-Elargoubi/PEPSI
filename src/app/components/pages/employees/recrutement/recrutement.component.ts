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
      this.employeeForm.controls['prenom'].setValue(this.editData.prenom)
      this.employeeForm.controls['prenom2'].setValue(this.editData.prenom2)
      this.employeeForm.controls['img'].setValue(this.editData.img)
      this.employeeForm.controls['date_naiss'].setValue(this.editData.date_naiss)
      this.employeeForm.controls['email'].setValue(this.editData.email)
      this.employeeForm.controls['cin'].setValue(this.editData.cin)
      this.employeeForm.controls['hiredate'].setValue(this.editData.hiredate)
      this.employeeForm.controls['typeSexe'].setValue(this.editData.typeSexe)
      this.employeeForm.controls['typeSituation'].setValue(this.editData.typeSituation)
      this.employeeForm.controls['lieu_naiss'].setValue(this.editData.lieu_naiss)
      this.employeeForm.controls['pays'].setValue(this.editData.pays)
      this.employeeForm.controls['ville'].setValue(this.editData.ville)
      this.employeeForm.controls['nationalite'].setValue(this.editData.nationalite)
      this.employeeForm.controls['langue'].setValue(this.editData.langue)
      this.employeeForm.controls['adress'].setValue(this.editData.adress)
      this.employeeForm.controls['passeport'].setValue(this.editData.passeport)
      this.employeeForm.controls['id_ass'].setValue(this.editData.id_ass)
      this.employeeForm.controls['id_sec'].setValue(this.editData.id_sec)
      this.employeeForm.controls['nom_contact'].setValue(this.editData.nom_contact)
      this.employeeForm.controls['rel_contact'].setValue(this.editData.rel_contact)
      this.employeeForm.controls['adress_contact'].setValue(this.editData.adress_contact)
      this.employeeForm.controls['poste'].setValue(this.editData.poste)
      this.employeeForm.controls['motif'].setValue(this.editData.motif)
      this.employeeForm.controls['nom_respo'].setValue(this.editData.nom_respo)
      this.employeeForm.controls['id_respo'].setValue(this.editData.id_respo)
      this.employeeForm.controls['mail_respo'].setValue(this.editData.mail_respo)
      this.employeeForm.controls['nom_entre'].setValue(this.editData.nom_entre)
      this.employeeForm.controls['add_entre'].setValue(this.editData.add_entre)

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

    if(!this.editData){
      // if(this.employeeForm.valid){
        console.log(this.employeeForm.value)
        this.employeeService.addEmployee(this.employeeForm.value)
        .subscribe({
          next:(res)=>{
            alert('Collaborateur ajouter avec succès')
            this.employeeForm.reset();
            this.dialogRef.close('save')
          },
          error:()=>{
            alert("Erreur de l'ajout du collaborateur")
          }
        })
      // }
    }
    else{ this.updateEmployee()}
  }

  updateEmployee(){
    this.employeeService.putEmployee(this.employeeForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Collaborateur modifier avec succès");
        this.employeeForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Erreur de modification du collaborateur !!!")
      }
    })
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


