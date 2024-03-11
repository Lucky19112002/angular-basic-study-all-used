import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5190/api/Brand';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    console.log(this.http.get<JSON>(this.apiUrl));
    return this.http.get<any[]>(this.apiUrl);
  }
}
