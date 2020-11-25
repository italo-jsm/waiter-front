import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Credentials } from '../model/credentials.model';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  token: string;

  login(credentials: Credentials): Observable<any>{
      return this.http.post<any>(environment.API_BASE + '/login', credentials)
      .pipe(tap(data => {
          this.token = 'Bearer ' + data.token;
      }))
  }

  isLoggedIn(){
      return this.token !== undefined
  }
}
