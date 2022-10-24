import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = new FormControl('');
  Email = new FormControl('');
  paswword = new FormControl('');
  adress = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
