import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  private loginStatus = true;
  loginForm: FormGroup;
  signUpForm: FormGroup;
  submitted1 = false;
  submitted2 = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      this.user = user;
      this.loggedIn = user != null;
      if (this.loggedIn) {
        this.router.navigate(['/user-dashboard', { isUserLoggedIn: true}]);
      }
    });
  }

  changeLoginStatus() {
    this.router.navigate(['/register']);
  }

  signOut(): void {
    this.authService.signOut();
  }
  login() {
    this.submitted1 = true;
    if (this.loginForm.valid) {
      // console.log(JSON.stringify(this.loginForm.value));
      this.userService.authenticate(this.loginForm.value).subscribe(response => {
        console.log(response);
        if (response) {
          // console.log(response);
          this.router.navigate(['/user-dashboard' , { isUserLoggedIn: true}]);
        }
      });
    } else {
      console.log(this.loginForm);
    }
}
}

