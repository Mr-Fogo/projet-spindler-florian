import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Client } from '../models/client';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [FormsModule, CommonModule, HeaderComponent]  
})
export class FormComponent {
  @Output() formData = new EventEmitter<any>();
  @Output() submitButtonClick = new EventEmitter<void>();
  formDataModel: any = {};
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) { }

  submitForm(form: NgForm) {
    if (form.valid && this.passwordMatch()) {
      this.apiService.registerClient(this.formDataModel).subscribe(
        (client: Client) => {
          console.log(client);
          this.errorMessage = null; // Clear any previous error messages
        },
        (error: any) => {
          this.errorMessage = error;
        }
      );
    }
  }

  passwordMatch(): boolean {
    return this.formDataModel.password === this.formDataModel.confirmPassword;
  }
}
