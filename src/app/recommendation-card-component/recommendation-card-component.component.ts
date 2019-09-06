import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recommendation-card-component',
  templateUrl: './recommendation-card-component.component.html',
  styleUrls: ['./recommendation-card-component.component.css']
})
export class RecommendationCardComponentComponent implements OnInit {
  @Input() public isUserLoggedIn = false;
  cards: any;
  slides: any;
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
      private route: ActivatedRoute
      ) {
      config.max = 5;
      config.readonly = true;
    }

    ngOnInit() {
      // this.getData();
      this.getRecommendedData();
    }

    getRecommendedData() {
      this.DataService.getRecommendedData().subscribe((response) => {
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
      // title = 'recommendation,' + title;
      // console.log(entity.title);
      console.log('iuytrd');
      this.router.navigate(['view', {title: title, isUserLoggedIn: true} ]);
      // this.router.navigate(['view']);
    }
}
