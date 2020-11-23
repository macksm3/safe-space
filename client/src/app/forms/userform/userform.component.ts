// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.scss']
// })
// export class FormComponent {
//   userProfileForm: FormGroup;
//   hideRequiredControl = new FormControl (false);
//   floatLabelControl = new FormControl ('auto');

//   constructor(fb: FormBuilder) { 
//     this.userProfileForm = fb.group({
//       hideRequired: this.hideRequiredControl,
//       floatLabel: this.floatLabelControl,
//     });
//   }

//   ngOnInit(): void {
//     this.userProfileForm = new FormGroup({
//       user_name: new FormControl(null),
//       user_pronoun: new FormControl(null),
//       user_location: new FormControl(null)
//     });
//   }

// }

import {Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
})
export class UserFormComponent {

  email= new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'you must enter an email address' :
    this.email.hasError('email') ? 'not a valid email' :
    '';
  }
}
