import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  // @Input() public isUserLoggedIn = false;
  // @Input() public domain = 'Movie';
  // @Input() public src1: any;
  // @Input() public src2: any;
  // @Input() public src3: any;
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  cards: any;
  slides: any;
  private isUserLoggedIn: any;
  private domain = 'Movie';
  private src1: string;
  private src2: string;
  private src3: string;
  // src1: any;
  // src2: any;
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
    console.log('Landingpage before');
    // this.domain = this.route.snapshot.paramMap.get('domain');
    // console.log(this.domain);
    this.isUserLoggedIn = this.route.snapshot.paramMap.get('isUserLoggedIn');
    console.log(this.isUserLoggedIn);
    this.getData();
    this.getCarousel(this.domain);
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

  getCarousel(domain: string) {
    this.DataService.getCarousel(domain).subscribe((response) => {
      console.log(`Response : ${response}`);
      console.log(654);
      console.log(response);
      if (response) {
        this.src1 = response[0].src1;
        // this.src1 = '../../assets/images/f9855049304b8c4e9debe158a74e5ae8.jpg';
        console.log(456);
        console.log(this.src1);
        this.src2 = response[1].src2;
        console.log(this.src2);
        this.src3 = response[2].src3;
      }
    });
  }

  selectedEntity(title: string) {
    this.router.navigate(['view', {title} ]);
  }

}
