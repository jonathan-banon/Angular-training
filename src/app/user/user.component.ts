import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userForm: FormGroup = this.fb.group({
    username: [''],
    address: this.fb.group({
      street:[''],
      city:[''],
      zipCode: [''],
    }),
    credential: this.fb.group({
      email: [''],
      password: ['']
    })
  })

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    console.log(this.userForm.value);
  }
  
  ngOnInit(): void {
  }

}
