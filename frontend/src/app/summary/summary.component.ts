import { Component,Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
   client!: Client;
  
  constructor(private apiService: ApiService) { 
    apiService.getClientInfo().subscribe(client => {
      this.client = client;
    })
  }

}

