import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Project } from './models';
import { Observable } from 'rxjs';

@Component({
  selector: 'coeus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projects$: Observable<Project[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects$ = this.dataService.getProjectData();
  }

  videoLoaded(event: Event) {
    (event.target as HTMLVideoElement).play();
  }
}
