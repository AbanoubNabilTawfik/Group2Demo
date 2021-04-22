import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  employees: IEmployee[]=[];
  
  
  constructor(private employeeService:EmployeeService) { }
  errorMsg="";
  employee:IEmployee;
  ngOnInit(): void {
    //this.employees=this.employeeService.getAllEmployees();
    this.employeeService.getAllEmployees().subscribe(
      data=>
      {
        this.employees=data;
      },
      error=>
      {
          this.errorMsg=error;
      }
    )

    // this.employeeService.postEmployee(this.employee).subscribe(
    //   response=>
    //   {
            
    //   },
    //   erro
    // )
  }
 
}
