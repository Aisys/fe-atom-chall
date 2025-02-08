import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  apiUrl = environment.services.apiUser;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  postLogin(email: string|null, password: string|null): Observable<any> {
    const obj = {email, password};
    return this.http.post<any>(`${this.apiUrl}/login`, obj);
  }


  postSignup(
    names: string|null,lastNames: string|null,email: string|null,password : string|null
  ): Observable<any> {
    const obj = {email, password, names, lastNames};
    return this.http.post<any>(`${this.apiUrl}/signup`, obj);
  }



}
