import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { this.http = http; }
  public request: any = {

  };
  getData(): Observable<any> {
    console.log(`Message`);
    console.log(this.request);
    return this.http.get('http://localhost:3000/cards');
  }
  getRecommendedData(): Observable<any> {
    console.log(`Message`);
    console.log(this.request);
    return this.http.get('http://localhost:3000/recommended');
  }

  getCard(title: string): Observable<any> {
    return this.http.get('http://localhost:3000/cards?title=' + title);
  }

  getCarousel(domain: string): Observable<any> {
    return this.http.get('http://localhost:3000/' + domain);
  }

}
