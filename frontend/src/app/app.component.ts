import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormComponent } from './form/form.component';
import { SummaryComponent } from './summary/summary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogueComponent } from './catalogue/catalogue.component';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, 
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      FooterComponent,
      HeaderComponent,
      BodyComponent,
      FooterComponent,
      FormsModule,
      ReactiveFormsModule,
      FormComponent,
      SummaryComponent,
      CatalogueComponent
    ]
})
export class AppComponent {
  title = "J'aime pas Angular";

}
