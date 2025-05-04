import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { RouterLink, Router } from '@angular/router';
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

  constructor(private router :Router) {}

  username  = new FormControl('',[Validators.email, Validators.required]);
  password  = new FormControl('',[Validators.required]);
  
  goToSignup() {
      this.router.navigate(['signup']);
  }


  login(event:any) {
    event.preventDefault();
    if(this.username.value && this.password.value){
      console.log(this.username, this.password);
      this.loginService.signInEmailAndPassword(
      this.username.value,
      this.password.value)
    }
  }
}

