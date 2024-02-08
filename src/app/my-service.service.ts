import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  public apiUrl = 'https://localhost:7173/api/Item'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
