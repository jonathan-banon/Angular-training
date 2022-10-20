import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class MyFormComponent implements OnInit {

  user: User = new User("", "", "", "");

  constructor() { }

  OnSubmit(): void {
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
