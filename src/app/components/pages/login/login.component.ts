import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user?:User

  constructor(private router:Router, private authService:AuthService){}

  loginHandler(){
    this.user = {email: "olivier@mail.com", password: "bestPassw0rd"}
    this.authService.login(this.user).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
  }
  
}
