import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }
  get firstNameControl(): FormControl {
    return this.myForm.get('firstName') as FormControl;
  }
  get lastNameControl(): FormControl {
    return this.myForm.get('lastName') as FormControl;
  }
  get emailControl(): FormControl {
    return this.myForm.get('email') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.myForm.get('password') as FormControl;
  }
  get confirmPasswordControl(): FormControl {
    return this.myForm.get('confirmPassword') as FormControl;
  }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value == confirmPassword.value) {
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true,
        });
      }
    };
  }

  onSubmit(signupform: { value: any }) {
    console.log(signupform.value);
  }

  ngOnInit() {}
}
