import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  cards: any;
  slides: any;
  private isUserLoggedIn: any;
  private domain: string;
  chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  constructor(
    private DataService: DataService,
    private config: NgbRatingConfig,
    private router: Router,
    private route: ActivatedRoute) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.getData();
    console.log("UserComponent ngOnInit");
    this.isUserLoggedIn = this.route.snapshot.paramMap.get('isUserLoggedIn');
    this.domain = this.route.snapshot.paramMap.get('domain');
    console.log(this.isUserLoggedIn);
  }


  getData() {
    this.DataService.getData().subscribe((response) => {
      console.log(`Response : ${response}`);
      if (response) {
        this.cards = response;
        console.log(this.cards);
        this.slides = this.chunk(this.cards, 4);

        // userForm.reset();
      }
    }, (err) => {
      console.log(err);
    });
  }

  selectedEntity(title: string) {
    this.router.navigate(['view', {title: title, isUserLoggedIn: true} ]);
    // this.router.navigate(['view', {title} ]);
  }

}
