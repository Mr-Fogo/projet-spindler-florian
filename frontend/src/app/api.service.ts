import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './models/album';
import { environment } from '../environments/environment';
import { Client } from './models/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getAlbums(searchTerm: string = ''): Observable<Album[]> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.set('searchTerm', searchTerm);
    }
    return this.http.get<Album[]>(environment.backendClient, { params });
  }
  public loginClient(email: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };  
    data = 'login=' + email + '&password=' + password;
    return this.http.post<Client>(environment.backendLoginClient, data, httpOptions);
  }
  public registerClient(client: Client): Observable<Client> {
    return this.http.post<Client>(environment.backendRegisterClient, client);
  }
  public getClientInfo(): Observable<Client> {
    return this.http.get<Client>(environment.backendClient);
  }
}