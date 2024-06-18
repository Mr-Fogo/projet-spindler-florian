import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FormComponent } from './form/form.component';
import { SummaryComponent } from './summary/summary.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';




export const routes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'inscription', component: FormComponent },
  { path: 'profil', component: SummaryComponent },
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' },
  { path: 'panier', component: CartComponent },
  { path: 'login', component: LoginComponent}
  

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }