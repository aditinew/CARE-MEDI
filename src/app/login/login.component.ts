import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

Username;
Email;
Password;

  constructor(private user: LoginService) { }

  ngOnInit() {
  }

  Login() {
    this.user.Login(this.Username, this.Email, this.Password);
    console.log(this.Username)
  }

}
