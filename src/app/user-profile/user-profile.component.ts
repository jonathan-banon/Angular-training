import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    hidden : true,
    quote : 'TEST',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  changeHidden() {
    this.user.hidden = !this.user.hidden;
  }

  setQuote(quote: string) {
    this.user.quote === quote;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
