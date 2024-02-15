import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormComponent } from './form/form.component';
import { SummaryComponent } from './summary/summary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, 
      RouterOutlet,
      FooterComponent,
      HeaderComponent,
      BodyComponent,
      FooterComponent,
      FormsModule,
      ReactiveFormsModule,
      FormComponent,
      SummaryComponent
    ]
})
export class AppComponent {
  title = 'TP2'
  recap = false;
  formData: any = {};
  receiveFormData(formData: any){
    this.formData = formData;
  }
  handleFormSubmit() {
    this.recap = true;
  }
  click(){
    this.recap = false;
  }
}
