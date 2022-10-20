import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {


  skill1: Skill = new Skill("1", "01", "001");
  skill2: Skill = new Skill("2", "02", "002");
  @Input() skills: Skill[] = [this.skill1, this.skill2];

  constructor() { }

  ngOnInit(): void {
  }

}
