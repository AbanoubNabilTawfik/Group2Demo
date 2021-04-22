import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
 employees= [];

  constructor(private employeeService:EmployeeService) { }
  errorMsg="";

  ngOnInit(): void {
    //this.employees=this.employeeService.getAllEmployees();

    this.employeeService.getAllEmployees().subscribe(
      employeeData=>
      {
        this.employees=employeeData;
      },
      responseError=>
      {
        this.errorMsg=responseError;
      }
    )
  }

}
