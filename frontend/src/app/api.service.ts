import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './models/album';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getAlbums(searchTerm: string = ''): Observable<Album[]> {

    return this.http.get<Album[]>(environment.backendClient);
  }
}