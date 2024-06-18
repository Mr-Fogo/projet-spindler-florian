import { Component } from '@angular/core';
import { NgxsModule, Select, Store } from '@ngxs/store';
import { BaseProduct } from './types/baseproduit';
import { PanierState } from './states/cart-state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ClearPanier, SupprimerProduit } from './action/cartaction';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Select(PanierState.getProduitPanier) produits$!: Observable<BaseProduct[]>;
  @Select(PanierState.prixTotalPanier) prixTotal$!: Observable<number>;
  @Select(PanierState.nombreProduitDansPanier) nombreProduitDansPanier$!: Observable<number>;

  constructor(private store: Store) {}

  showThankYouMessage = false;

  displayThankYouMessage() {
    this.store.dispatch(new ClearPanier()).subscribe(() => {
      this.showThankYouMessage = true;
  });
}
removeProduct(productId: number) {
  console.log(productId);
  this.store.dispatch(new SupprimerProduit(productId));
}
}
