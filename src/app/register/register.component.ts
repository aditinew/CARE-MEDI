import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Firstname;
  Lastname;
  Username;
  Email;
  Phone;
  Password;
  Reconfirmpassword;

  constructor(private user: RegisterService) { }

  ngOnInit() {
  }

  Signup() {
    this.user.Signup(this.Firstname, this.Lastname, this.Username, this.Email, this.Phone, this.Password, this.Reconfirmpassword);
    console.log('Respond');
  }
}
