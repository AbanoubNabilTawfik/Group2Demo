import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  name="ITI"
  url=window.location.href;
  inputId="myId2";
  textColor="text-danger";
  hasErr=false;
  isSpecial=true;

  classCollections={
    "text-success":!this.hasErr,
    "text-danger":this.hasErr,
    "text-special":this.isSpecial
  }

  styleCollection={
    color:"yellow",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
    this.styleCollection.color="green"
  }

}
