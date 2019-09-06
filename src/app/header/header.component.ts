import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
// import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // private router: Router;
  @Input() public isUserLoggedIn: boolean;


  constructor(
    private router: Router
  ) { }


  ngOnInit() {
    console.log(`Header ngOnInit: ${this.isUserLoggedIn}`);
    // this.routeToDomain('Movie');
  }

  onClick() {
    // this.router.navigate(['/landing']);
    this.isUserLoggedIn = true;
  }

  profile() {
    console.log(456);
    this.router.navigate(['/profile', { isUserLoggedIn: true }]);
  }

  routeToDomain(domainName: string) {
    // if (domainName === null) {
    //   console.log('if Domainname is null');
    //   domainName = 'Movie';
    // }
    if (this.isUserLoggedIn) {
      console.log('LoggedIn header before route');
      this.router.navigate(['/user-dashboard', { isUserLoggedIn: true}]);
      console.log('LoggedIn header after route');
    } else {
      console.log('NotLoggedIn header before route');
      console.log(domainName);
      this.router.navigate(['/landing', { isUserLoggedIn: false}]);
      console.log('NotLoggedIn header after route');
    }
  }

}
