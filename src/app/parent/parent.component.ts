import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) childComponent:ChildComponent;
  name:string="hello from parent";
  childMSG="";
  displayMsg(childDataValue)
  {
    console.log(childDataValue);
   
  }
  constructor() { }

  ngOnInit(): void {
   // console.log(this.childComponent.testProp)
  }
  ngAfterViewInit()
  {
    //console.log(this.childComponent.testProp)
    this.childComponent.fireData();
  }

}
