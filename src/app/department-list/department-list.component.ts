import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  selectedId
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=parseInt(params.get('id'));
      })
  }

  onSelect(dept)
  {
    this.router.navigate(["/departments",dept.id])
  }

  isSelected(dept)
  {
   return dept.id===this.selectedId;
  }

}
