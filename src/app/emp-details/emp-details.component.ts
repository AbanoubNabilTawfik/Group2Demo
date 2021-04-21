import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  employees= [];
  
  
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this.employeeService.getAllEmployees();
  }

}
