import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../api.service';
import { Album } from '../models/album';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../searchbar/searchbar.component';
import { Store } from '@ngxs/store';
import { AjouterProduit } from '../cart/states/cart-state';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchBarComponent],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {

  albums!: Observable<Album[]>;
  searchQuery: string = '';

  constructor(private apiService: ApiService, private store : Store) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albums = this.apiService.getAlbums();
  }

  getByName(event: string) {
    this.searchQuery = event.toLowerCase();
    console.log(this.searchQuery);
    this.albums = this.apiService.getAlbums(this.searchQuery);
  }

  ajouterAuPanier(produit: Album) {
    this.store.dispatch(new AjouterProduit(produit));
  }
}