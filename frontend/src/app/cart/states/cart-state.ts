import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { BaseProduct } from '../types/baseproduit';
import { AjouterProduit, ClearPanier, SupprimerProduit } from '../action/cartaction';

export interface PanierStateModel {
  produits: BaseProduct[];
}

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    produits: []
  }
})
@Injectable()
export class PanierState {

    
  @Selector()
    static getProduitPanier(state: PanierStateModel) {
        return state.produits;
    }

    @Selector()
    static prixTotalPanier(state: PanierStateModel){
        return state.produits.reduce((total, productWrapper) => {
            return total + (productWrapper.product.prix * productWrapper.quantite);
          }, 0);
    }

    @Selector()
    static nombreProduitDansPanier(state: PanierStateModel){
        return state.produits.length;
    }

    @Action(AjouterProduit)
    ajouterProduit(ctx: StateContext<PanierStateModel>, action: AjouterProduit) {
        const state = ctx.getState();
        console.log(action.album);
        const baseProduct: BaseProduct = {
            product: action.album,
            quantite: 1
        };

        ctx.patchState({
            produits: [...state.produits, baseProduct]
        });
    }

    @Action(SupprimerProduit)
    supprimerProduit(ctx: StateContext<PanierStateModel>, action: SupprimerProduit) {
        const state = ctx.getState();
        const productToRemove = state.produits.find(product => product.product.id === action.id)?.product;
        ctx.patchState({
          produits: state.produits.filter(product => product.product.id !== action.id)
        })
    }

    @Action(ClearPanier)
    clearBasket(ctx: StateContext<PanierStateModel>){
        ctx.setState({ produits: []});
    }
}
export { AjouterProduit };