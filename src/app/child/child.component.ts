import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  //@Input() parentData
  @Input('parentData') name;

  testProp:string="Hello im testing prop";

  @Output() childData =new EventEmitter();

  ngOnInit(): void {
  }

  fireData()
  {
    this.childData.emit("Hello from child")  //$event
  }

}
