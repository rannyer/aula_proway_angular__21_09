import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessToken, User } from '../models/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000"
  constructor(private httpClient:HttpClient) { }

  login(user:User):Observable<AccessToken>{
    return this.httpClient.post<AccessToken>(`${this.url}/signin`, user)
  }
}
