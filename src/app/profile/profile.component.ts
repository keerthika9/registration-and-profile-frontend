import { Profile } from './../profile.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild("closebutton",{static:true}) closebutton:ElementRef;
  userServices={
    emailId:"",myReviews:"",myEntities:"",userScore:"",firstName:"",lastName:"",mobileNumber:""
};
  public isUserLoggedIn: any;
  updated: any;
  // public profiles=[];


  constructor(
    private xyz: ProfileService,
    private route: ActivatedRoute) { }

    public emailId ="abc@gmail.com";
     profile : Profile =new Profile();
  ngOnInit() {
      this.getTheProfile();
      this.isUserLoggedIn = this.route.snapshot.paramMap.get('isUserLoggedIn');
      console.log('Hello');

      console.log(this.isUserLoggedIn);
  }

  getTheProfile() {
    this.xyz.getByEmailIdForUserService(this.emailId).subscribe(data => {
      this.userServices =data;
      console.log(this.userServices);
    });
  }
  onSubmitUpdate(){
    console.log("inside submit");
    this.xyz.updateTheProfile(this.profile).subscribe((data)=> {
      console.log("data updated..", data);
      this.updated=data;
      this.closebutton.nativeElement.click();
      this.getTheProfile();
      console.log("after getting back from service",this.updated);
    });
    
  }
}
