import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { PopupService } from '../../services/popup-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  

  constructor(
    private router: Router,
    private loginService: LoginService,
    private popupService: PopupService
  ) {}


  email = new FormControl("", [Validators.required, Validators.email]);
  username = new FormControl("", [Validators.required, Validators.min(5), Validators.maxLength(15)]);
  password  = new FormControl("", [Validators.required, ]);
  confirmPassword  = new FormControl("", [Validators.required, ])

  goToLogin() {
    this.router.navigate(['login']);
  }

  async signUp(event: any) {
    console.log("in signup")
    event.preventDefault();

    if(this.email.value && this.password.value && this.confirmPassword.value){
      if(this.password.value == this.confirmPassword.value) {
        console.log(this.email, this.password);
        var signUpResult = await this.loginService.signUp(
        this.email.value,
        this.password.value);
        console.log(signUpResult);
        if(signUpResult.includes("email-already-in-use")){
          this.popupService.showPopup(`this ${this.email.value} is already associated with another account`);
        }
      } else {
        console.log("in else")
        this.popupService.showPopup(`password and confirmPassword does not match`);
      }
    }
  }


   popup(event:any) {
    event.preventDefault();
    this.popupService.showPopup("Verification email sent");
  } 
}