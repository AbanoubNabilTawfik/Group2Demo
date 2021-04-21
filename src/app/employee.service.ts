import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployees()
  {
    return [
      {"name":"Abanoub Nabil" , "age":25},
      {"name":"Abanoub Magdy" , "age":24},
      {"name":"Gerges Abd elmalak" , "age":28},
      {"name":"Rewan Atef" , "age":23},
      {"name":"Salwa Ezz" , "age":22}
  ];
  }
}
