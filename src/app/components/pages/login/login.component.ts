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

  user:User = {email: "", password: ""}

  constructor(private router:Router, private authService:AuthService){}

  loginHandler(){   
    console.log(this.user)
    this.authService.login(this.user).subscribe({
      next: res => {
        localStorage.setItem("access-token",res.accessToken)
        this.router.navigate(['movies'])
      },
      error: err => console.log(err)
    })
  }
  
}
