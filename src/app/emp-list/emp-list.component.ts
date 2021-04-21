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
  

  ngOnInit(): void {
    this.employees=this.employeeService.getAllEmployees();
  }

}
