import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refrence-variable',
  templateUrl: './template-refrence-variable.component.html',
  styleUrls: ['./template-refrence-variable.component.scss']
})
export class TemplateRefrenceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logValue(inputValue)
  {
    console.log(inputValue.value)
  }

}
