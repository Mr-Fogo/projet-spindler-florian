import { Album } from "../../models/album";


export class AjouterProduit {
    static readonly type ='[Panier] Ajouter produit';
    constructor(public album: Album){}
    
    
}

export class SupprimerProduit{
    static readonly type ='[Panier] Supprimer produit';
    constructor(public id : number){}
}

export class ClearPanier{
    static readonly type ='[Panier] Clear';
}