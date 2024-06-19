import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    return this.http.get<Album[]>(environment.backendClient, { params })
      .pipe(
        catchError(this.handleError)
      );
  }

  public loginClient(email: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };  
    data = 'login=' + email + '&password=' + password;
    return this.http.post<Client>(environment.backendLoginClient, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public registerClient(client: Client): Observable<Client> {
    return this.http.post<Client>(environment.backendRegisterClient, client)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getClientInfo(): Observable<Client> {
    return this.http.get<Client>(environment.backendClientInfo)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      switch (error.status) {
        case 409:
          errorMessage = 'Un utilisateur avec le même login et mot de passe existe déjà.';
          break;
        case 400:
          errorMessage = 'Les données fournies sont invalides.';
          break;
        default:
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          break;
      }
    }
    return throwError(errorMessage);
  }
}
