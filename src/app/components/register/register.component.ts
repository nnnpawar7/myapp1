import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { registration } from "../../services/register.service"

@Component({
  selector: 'app-regeister',
  templateUrl: 'register.component.html',
  providers: [registration]
})

export class registerComponent {
  // registrationForm = new FormGroup({
  //     username: new FormControl(''),
  //     cpassword: new FormControl(''),
  //     password: new FormControl(''),
  //     address: new FormGroup({
  //         city: new FormControl(''),
  //         state: new FormControl(''),
  //         zip: new FormControl('')
  //     })
  // });
  registrationForm = this.fb.group({
    username: ['',[Validators.required,Validators.minLength(30)]],
    cpassword: [''],
    password: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      zip: ['']
    })
  })
  constructor(private fb: FormBuilder, private _registration: registration) {

  }

  register(value) {
    this._registration.dummyData()
      .subscribe(data => {
          console.log(111);
        this.registrationForm.patchValue(data)
      }, err => {
        console.log(err)
      }, () => {
        console.log('Completed')
      });
  }
}
