import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { AddEntityService } from '../add-entity.service';


@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.css']
})
export class AddEntityComponent implements OnInit {

selectedCategory = 0;
selectedSubCategory = 0;
selectedBrand = 0;
entityTitle: any;
entityDescription: any;

subCategory = [];
brands = [];


onSelectCategory(categoryId: number) {
  this.selectedCategory = categoryId;
  this.selectedSubCategory = 0;
  this.brands = [];
  this.subCategory = this.getSubCategory().filter((item) => {
  return item.categoryId === Number(categoryId);
  });
  }


onSelectSubCategory(subCategoryId: number) {
  this.selectedSubCategory = subCategoryId;
  this.brands = this.getbrand().filter((item) => {
  return item.subCategoryId === Number(subCategoryId);
  });
  }

getCategory() {
return [
{ id: 1, name: 'Electronics' },
{ id: 2, name: 'Restaurants' }
];
}

getSubCategory() {
return [
{ id: 1, categoryId: 1, name: 'Mobile' },
{ id: 2, categoryId: 1, name: 'Laptop' },
{ id: 3, categoryId: 1, name: 'TV' },
{ id: 4, categoryId: 1, name: 'AC' },
{ id: 5, categoryId: 1, name: 'Camera' },
{ id: 6, categoryId: 2, name: '5*' },
{ id: 7, categoryId: 2, name: '4*' },
];
}

getbrand() {
return [
{ id: 1, subCategoryId: 1, name: 'Redmi' },
{ id: 2, subCategoryId: 1, name: 'Nokia' },
{ id: 3, subCategoryId: 1, name: 'Oppo' },
{ id: 4, subCategoryId: 1, name: 'Motorola' },
{ id: 5, subCategoryId: 2, name: 'Acer' },
{ id: 6, subCategoryId: 2, name: 'Dell' },
{ id: 7, subCategoryId: 2, name: 'Sony' },
{ id: 8, subCategoryId: 2, name: 'Lenevo' },
{ id: 9, subCategoryId: 3, name: 'Sumsung' },
{ id: 10, subCategoryId: 3, name: 'Onida' },
{ id: 11, subCategoryId: 3, name: 'Videocon' }
];
}

  constructor(private addEntity: AddEntityService) { }

  ngOnInit() {

  }

  saveEntity() {
    this.addEntity.saveEntity(this.selectedCategory, this.selectedSubCategory, this.selectedBrand, this.entityTitle, this.entityDescription)
    .subscribe((response) => {
      console.log(response);
      if (response) {
      }
      }, (err) => {
        console.log(err);
    });
  }

}
