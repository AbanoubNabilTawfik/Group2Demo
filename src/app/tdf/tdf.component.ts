import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  topics=["Angular","React","Veu"];
  userModel=new User(
                     '',
                     'abnabil@iti.gov.eg',
                     '','Assuit',
                     'Assuit',
                     '71642',
                     'Angular',
                     'eveninig',
                     true);
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data)
  {
    console.log(data)
    console.log(this.userModel);
  }

}
