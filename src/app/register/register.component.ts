import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPassword } from '../misMatch.validator';
import { ForbiddenNameValidator } from '../username.validatior';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  // registerForm=new FormGroup({
  //   userName:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     street:new FormGroup({
  //       addressNo:new FormControl(''),
  //       addressLine:new FormControl('')
  //     }),
  //     state:new FormControl(''),
  //     city:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // });

  registerForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/admin/)]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    alternativeEmails:this.fb.array([]),
    subscribe:[false],
    address:this.fb.group({
      street:this.fb.group({
        addressNo:[''],
        addressLine:['']
      }),
      state:[''],
      city:[''],
      postalCode:['']
    })
  },{validators:[ConfirmPassword]});
  //userName:any=

  get userName()
  {
    return this.registerForm.get('userName');
  }

  get email()
  {
    return this.registerForm.get('email');
  }

  get alternativeEmails()
  {
    return this.registerForm.get('alternativeEmails') as FormArray;
  }
  addNewEmail()
  {
    this.alternativeEmails.push(this.fb.control(''));
  }

  removeEmail(emailIndex)
  {
    this.alternativeEmails.removeAt(emailIndex);
  }
  setValidationToEmail()
  {
    this.registerForm.get('subscribe').valueChanges.subscribe(checkedVlaue=>
      {
        const email=this.registerForm.get('email');
        if(checkedVlaue)
        {
          //Set validation to email
          email.setValidators(Validators.required);
          
        }
        else
        {
          //clear validation from email

          email.clearValidators();
        }
        email.updateValueAndValidity();
      })
  }
  ngOnInit(): void {
  // this.userName="Shymaa"
  }

  loadApiData()
  {
    // this.registerForm.setValue({
    //   userName:'ITI',
    //    password:'123',
    //   confirmPassword:'123',
    //   address:{
    //     street:{
    //       addressNo:'1234',
    //       addressLine:'assuit'
    //     },
    //     state:'Egypt',
    //     city:'Assuit',
    //     postalCode:'71111'
    //   }

    // })
    this.registerForm.patchValue({
      userName:'ITI',
      //  password:'123',
      // confirmPassword:'123',
      address:{
        street:{
          addressNo:'1234',
          addressLine:'assuit'
        },
        state:'Egypt',
        city:'Assuit',
        postalCode:'71111'
      }

    })
  }
}
function ConfirmPasswordValidator(arg0: { userName: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors)[])[]; password: string[]; confirmPassword: string[]; address: FormGroup; }, ConfirmPasswordValidator: any) {
  throw new Error('Function not implemented.');
}

