import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  cards: any;
  card: any;
  review: any;
  public isUserLoggedIn: any;

  constructor(
    private DataService: DataService,
    private config: NgbRatingConfig,
    private route: ActivatedRoute
    ) {
      // this.route.params.subscribe(params => {
      //   console.log(params.entity);
      //   if (params.entity) {
      //     console.log('jldfjaeur');
      //     console.log(params.entity.title);
      //     // this.doSearch(params.view);
      //   }
      // });
      this.route.params.subscribe(params => {
        console.log(params);
        this.getData(params.title);
        // console.log(this.card);
      });
      config.max = 5;
      config.readonly = true; }

  ngOnInit() {
    this.isUserLoggedIn = this.route.snapshot.paramMap.get('isUserLoggedIn');
    // console.log('adf');
    // this.route.params.subscribe(params => console.log(params['card'].title));
    // console.log('iuytreazx');
    // this.getData();

  }
  getData(title: string) {
    this.DataService.getCard(title).subscribe((response) => {
      console.log(`Response : ${response}`);
      if (response) {
        this.cards = response;
        console.log(this.cards);
        console.log(14356789);
        for (const cardd of this.cards) {
          if (cardd.title === title) {
            this.card = cardd;
            console.log(cardd);
            break;
          }
        }
        // this.card = this.cards[0];
        // console.log( this.card.reviews);
        // this.review = this.card.reviews;
        console.log(this.card);
        console.log('asfsb');
        // console.log(this.review[0].review.title);
        // userForm.reset();
      }
    }, (err) => {
      console.log(err);
    });
 }
}
