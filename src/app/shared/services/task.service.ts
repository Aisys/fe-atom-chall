import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {

  apiUrl = environment.services.apiTask;

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  putChangeStates(ids: string[]): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/change-states`, ids);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
