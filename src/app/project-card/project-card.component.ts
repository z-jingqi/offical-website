import { Component, OnInit, Input } from '@angular/core';
import { ProjectCardType } from '../models';

@Component({
  selector: 'coeus-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() name = '';
  @Input() description = '';
  @Input() type: ProjectCardType = 'resource';
  @Input() icon = '';

  constructor() { }

  ngOnInit(): void {

  }

}
