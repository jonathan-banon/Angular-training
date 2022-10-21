import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newOnomatopia: string = "";
  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();
  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
