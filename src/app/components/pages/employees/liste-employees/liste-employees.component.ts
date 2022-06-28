import { EmployeeService } from './../../../../services/employee.service';
import { RecrutementComponent } from './../recrutement/recrutement.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-liste-employees',
  templateUrl: './liste-employees.component.html',
  styleUrls: ['./liste-employees.component.css']
})
export class ListeEmployeesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'cin','tel','email','poste','hiredate','actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  openDialog() {
    const dialogRef = this.dialog.open(RecrutementComponent,{
      width : '70%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllEmployees();
        console.log(`Dialog result: ${val}`);
      }
    })

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });

  }


  getAllEmployees(){
    console.log("listes des collaborateurs")
    this.employeeService.getEmployeesList()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort

      },
      error:(err)=>{
        alert("Erreur de récuperation des données")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editEmployee(row : any){
    this.dialog.open(RecrutementComponent,{
      width:'60%',
      data : row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllEmployees();
        console.log(`Dialog result: ${val}`);
      }
    })

  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next:(res)=>{
        alert("Collaborateur supprimer avec succès");
        this.getAllEmployees();
      },
      error:()=>{
        alert("Erreur de suppression du collaborateur")
    }
    })

  }

}
