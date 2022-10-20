import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newOnomatopia: String = "";
  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();
  createOnomatopia(): void {};

  constructor() { }

  ngOnInit(): void {
  }

}
