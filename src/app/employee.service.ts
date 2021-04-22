import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './IEmployee';
import {catchError} from 'rxjs/operators';
import { baseUrl } from './config';
import { EmployeesController } from './APIs/EmployeesController';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  url=EmployeesController.GetAllEmployees;
  //https://localhost:2345/employees
  
  getAllEmployees():Observable<IEmployee[]>
  {
   return this.http.get<IEmployee[]>(this.url).pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }

  postEmployee(employee:IEmployee)
  {
    this.http.post(this.url,employee).pipe(catchError((err)=>{
      return throwError(err.message || "Internal Server Error Please contact site adminstarator")
    })
    );
  }
}
