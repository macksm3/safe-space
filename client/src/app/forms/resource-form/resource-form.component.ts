import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormService } from "../../services/resource-form.service";

@Component({
  selector: 'app-resource-form',
  providers: [FormService],
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss']
})
export class ResourceFormComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  selectedType = 'option2'
  selectedBool = 'option2';


  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let URL_REGEXP: RegExp = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

    this.formGroup = this.formBuilder.group({
      'type': [null, Validators.required],
      'name': [null, Validators.required],
      'city': [null, Validators.required],
      'state': [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      'website': [null, [Validators.required, Validators.pattern(URL_REGEXP)]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(400)]],
      'contactName': [null],
      'phone': [null, [Validators.minLength(10), Validators.maxLength(14)]],
      'email': [null, [Validators.pattern(EMAIL_REGEXP)]],
      'memberOwned': [null, Validators.required]
    });
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('pattern') ? 'Not a valid email address.' : '';
  }

  getErrorUrl() {
    return this.formGroup.get('website').hasError('required') ? 'Field is required' :
      this.formGroup.get('website').hasError('pattern') ? 'Not a valid url.' : '';
  }

  getErrorState() {
    return this.formGroup.get('state').hasError('required') ? 'Field is required' :
      this.formGroup.get('state').hasError('maxlength') ? 'Please enter state in abbreviated form.' : '';
  }

  onSubmit(post) {
    this.post = post;
    this.formService.addBusiness(post);
  }
}
