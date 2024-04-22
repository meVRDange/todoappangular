import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCard,MatCardContent,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginService: LoginService = inject(LoginService);
  user :any;

  username  = new FormControl('',[Validators.email, Validators.required]);
  password  = new FormControl('',[Validators.required]);
  
  
  signup() {
    if(this.username.value && this.password.value){
        this.loginService.createUserWithEmailAndPassword(
        this.username.value,
        this.password.value)
    }
  }

  login() {

  }
}
