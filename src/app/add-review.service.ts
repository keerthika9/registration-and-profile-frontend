import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {
  constructor(private http: HttpClient) {

  }
  public request: any = {
      review:"Add Review"
   };

  // _url = 'http://localhost:8080/addReview';
  // constructor(private http: HttpClient) { }
  // public review: any;
  // saveReview(review: any): Observable<any> {
  //   console.log("asass");
  //   this.review = review;
  //   this.http.post<any>(this._url, this.review);
  saveReview (reviewText : any): Observable<any> {
  this.request.review = reviewText;
  console.log(this.request);
  return this.http.post('http://localhost:8080/addReview', this.request);
  }
  }


