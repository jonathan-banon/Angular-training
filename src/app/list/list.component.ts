import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  onomatopoeiaList: string[] = [];

  receiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event).toString();
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
