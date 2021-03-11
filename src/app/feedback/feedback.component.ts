import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  Firstname;
  Lastname;
  Username;
  Email;
  Address;
  Phone;
  Message;
  Question;
  
  constructor(private us: UsersService) { }

  ngOnInit() {
  }

  addData() {
    this.us.addData(this.Firstname,this.Lastname,this.Username,this.Email,this.Address,this.Phone,this.Message,this.Question);
    // console.log(this.name)
}

}
