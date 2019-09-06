import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { AddReviewService } from '../add-review.service';


@Component({
  selector: 'app-add-a-review',
  templateUrl: './add-a-review.component.html'
  ,
  styleUrls: ['./add-a-review.component.css'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class AddAReviewComponent implements OnInit {

  reviewText: any = "";

  constructor(config: NgbRatingConfig, private addReviewService: AddReviewService) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit() {
  }
  saveReview() {
    console.log(this.reviewText);
    this.addReviewService.saveReview(this.reviewText).subscribe((response) => {
      console.log(response);
      if (response) {

      }
    }, (err) => {
      console.log(err);
    });
  }
}
