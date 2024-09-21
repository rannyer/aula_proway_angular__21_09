import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private router:Router){}

  user:String = ""
  loginHandler(){
    if(this.user == "admin@gmail.com") {
      localStorage.setItem("user-type","admin")
      this.router.navigate(['/movies'])
    }else{
      localStorage.setItem("user-type","user")
      this.router.navigate([''])
    }
    
  }
  
}
