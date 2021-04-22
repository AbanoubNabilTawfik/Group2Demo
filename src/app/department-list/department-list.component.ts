import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"HTML"},
    {"id":4,"name":"C#"},
    {"id":5,"name":"MVC"}
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(dept)
  {
    this.router.navigate(["/departments",dept.id])
  }

}
