import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';  // Importer le Router
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

  constructor(private apiService: ApiService, private router: Router) { }  // Injecter le Router

  submitForm(form: NgForm) {
    if (form.valid && this.passwordMatch()) {
      this.apiService.registerClient(this.formDataModel).subscribe(
        (client: Client) => {
          console.log(client);
          this.errorMessage = ""; // Clear any previous error messages
          this.router.navigate(['/login']);  // Redirection vers la page de connexion
        },
        (error: any) => {
          if (error.status === 409) {
            this.errorMessage = "Le login est déjà utilisé. Veuillez en choisir un autre.";
          } else {
            this.errorMessage = "Erreur lors de la création du compte.";
          }
        }
      );
    }
  }

  passwordMatch(): boolean {
    return this.formDataModel.password === this.formDataModel.confirmPassword;
  }
}
