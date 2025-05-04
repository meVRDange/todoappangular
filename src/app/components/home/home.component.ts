import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatRipple } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatRipple,RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  loginService: LoginService = inject(LoginService);
  // email = this.loginService.gatUserEmail();
}
