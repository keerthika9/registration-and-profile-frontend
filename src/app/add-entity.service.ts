import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddEntityService {

  constructor(private http: HttpClient ) { }

  public request: any = {
      // entity: 'Add entity',
  };

saveEntity(category: any, subCategory: any, brand: any, title: any, description: any): Observable<any> {
    this.request.selectedCategory = category;
    this.request.selectedSubCategory = subCategory;
    this.request.selectedBrand = brand;
    this.request.entityTitle = title;
    this.request.entityDescription = description;
    console.log(this.request);
    return this.http.post('http://localhost:8000/add-entity', this.request);

}

}
