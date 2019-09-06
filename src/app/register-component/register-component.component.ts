import { Register } from "./register-component.model";
import { Component, OnInit } from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import {
  AuthService,
  GoogleLoginProvider,
  SocialUser
} from "angularx-social-login";

import { Router } from "@angular/router";
import { ProfileService } from "../profile.service";
import { RegisterService } from "../register.service";

@Component({
  selector: "app-register-component",
  templateUrl: "./register-component.component.html",
  styleUrls: ["./register-component.component.css"]
})
export class RegisterComponentComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user: Register = new Register();

  // public userName: any = '';
  // public password: any = '';
  // private user: SocialUser;
  // private loggedIn: boolean;
  // private loginStatus: boolean = true;
  // loginForm: FormGroup;
  // signUpForm: FormGroup;
  // submitted1 = false;
  // submitted2 = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  ThirdFormGroup: FormGroup;
  firstName: any;
  lastName: any;
  emailId: any;
  password: any;
  mobileNumber: any;
  data: any;
  private isLinear = true;


  constructor(
    // private registerService:ProfileService,
    private registerService: RegisterService,
    private profileService: ProfileService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      EmailId: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.ThirdFormGroup = this.formBuilder.group({
      mobile: ["", Validators.required]
    });
  }
  getf() {
    return this.registerForm.controls;
  }

  // onSubmit(){
  // this.registerService.createUser(this.user)
  // .subscribe(data=>{
  // console.log(data);
  // this.submitted=true;
  // },
  // error=>console.log(error));
  // }

  onSubmit() {
    console.log(
      this.firstName,
      this.lastName,
      this.emailId,
      this.password,
      this.mobileNumber
    );
    this.profileService.createUser(this.user).subscribe(
      response => {
        this.data = response;
        console.log(this.data);
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
