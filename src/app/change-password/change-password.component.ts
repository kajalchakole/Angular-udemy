import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent{

  form : FormGroup;

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      oldPassword : ['', Validators.required, PasswordValidator.validOldPassword],
      newPassword : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    }, { validator : PasswordValidator.passwordShouldMatch });
  }

  get newPassword(){
    return this.form.get('newPassword') as FormControl;
  }

  get oldPassword(){
    return this.form.get('oldPassword') as FormControl;
  }

  get confirmPassword(){
    return this.form.get('confirmPassword') as FormControl;
  }

}
