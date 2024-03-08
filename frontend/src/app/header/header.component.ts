import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
goToCatalogue() {
throw new Error('Method not implemented.');
}
goToInscription() {
throw new Error('Method not implemented.');
}
  @Output() showCatalogueClicked = new EventEmitter<void>();
  @Output() showInscriptionClicked = new EventEmitter<void>();

  constructor() { }

  showCatalogue() {
    this.showCatalogueClicked.emit();
  }

  showInscription() {
    this.showInscriptionClicked.emit();
  }
}
