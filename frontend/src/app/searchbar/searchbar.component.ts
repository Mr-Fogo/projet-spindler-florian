import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  constructor() {}

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
  }

  onSearchClick() {
    this.searchEvent.emit(this.searchTerm);
  }
}