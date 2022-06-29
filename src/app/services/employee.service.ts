import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    // Ajouter URL de BD
    private baseUrl = "http://localhost:3000/ListEmployees/";
    constructor(private httpClient : HttpClient) { }

    getEmployeesList(): Observable<Employee[]>{
      // return this.httpClient.get<Employee[]>(`${this.baseUrl}`) ;
      return this.httpClient.get<Employee[]>(this.baseUrl) ;
    }

    addEmployee(employee : Employee): Observable<Object>{
      // return this.httpClient.post(`${this.baseUrl}`, employee);
      return this.httpClient.post(this.baseUrl, employee);
    }

    // updateEmployee(employee : Employee)  : Observable<Employee>{
    //   return this.httpClient.put<Employee>(`http://desktop-gl1v7ag:9007/pepsi/update` , employee);
    // }



    getEmployeeById(id: number): Observable<Employee>{
      return this.httpClient.get<Employee>(this.baseUrl+'/FindById/'+id)
    }

    // Delete Employee
    // deleteEmployeeById(id: number, employee : Employee): Observable<Object>{
    //   return this.httpClient.put(this.baseUrl+'/delete/'+id, employee)
    // }

    deleteEmployee(id : number) : Observable<Object> {
      return this.httpClient.delete(this.baseUrl+id);
    }


    // Update Employee
    putEmployee(data:any,id : number): Observable<Object> {
      return this.httpClient.put<any>(this.baseUrl+id, data);
    }

}
