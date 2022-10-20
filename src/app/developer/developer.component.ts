import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer: Developer = new Developer("", "", 0, "", "", 
  [
    new Skill("", "", "")
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
