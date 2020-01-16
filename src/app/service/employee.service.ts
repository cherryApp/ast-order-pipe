import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:3000/employee';

  constructor(
    private http: HttpClient,
  ) { }

  get(id?: number): Observable<any> {
    return this.http.get( `${this.url}${id ? `/${id}` : ''}` );
  }

}
