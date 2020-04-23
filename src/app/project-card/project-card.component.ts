import { Component, OnInit, Input } from '@angular/core';
import { ProjectCardType, Project } from '../models';

@Component({
  selector: 'coeus-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project = {} as Project;

  constructor() { }

  ngOnInit(): void {

  }

  clickEvent(event: MouseEvent) {
    event.stopPropagation();
    if (this.project.type == 'qrcode') {
      return;
    }
    window.open(this.project.url, "_blank");
  }

}
