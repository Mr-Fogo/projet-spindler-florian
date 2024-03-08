import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  onSearchChange(event: any) {
    
    const target = event.target.value
    console.log(target)
    this.searchEvent.emit(target);

  }
}