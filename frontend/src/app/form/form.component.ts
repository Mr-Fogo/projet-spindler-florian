import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import{ FormControl } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    imports: [FormsModule, CommonModule, HeaderComponent]
})
export class FormComponent {
  @Output() formData = new EventEmitter<any>();
  @Output() submitButtonClick= new EventEmitter<void>();
  formDataModel: any = {};

  submitForm(form: NgForm) {
    if(form.valid && this.passwordMatch())
    {
    this.formData.emit(this.formDataModel);
    this.submitButtonClick.emit();
    }
 }
  passwordMatch(): boolean 
  {
    return this.formDataModel.password === this.formDataModel.confirmPassword
  }
  
}
