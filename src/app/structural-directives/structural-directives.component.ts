import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  
  showTxt:boolean=false;
  name:string="ITI";
  isLoggedIn:boolean=true;
  car="LOGANK";
  colors=["red","blue","green","yellow"];

  students=[
    {"id":1,"name":"Shaymaa"},
    {"id":2,"name":"Ahmed"}
  ]
  constructor() {
   // this.showTxt=false;
   }

  ngOnInit(): void {
    //this.showTxt=false;
  }

}
