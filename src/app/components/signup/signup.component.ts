import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    if(this.username.value && this.password.value && this.confirmPassword.value){
    console.log("in first if")
      if(this.password == this.confirmPassword) {
        console.log("in second if")
        console.log(this.username, this.password);

        var signUpResult = await this.loginService.signUp(
        this.username.value,
        this.password.value);
  
        if(signUpResult == "EMAIL_EXISTS"){
          this.popupService.showPopup(`this ${this.email} is already associated with another account`);
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