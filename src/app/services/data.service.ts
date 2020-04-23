import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getProjectData(): Observable<Project[]> {
    const url = 'assets/data/projects.json';
    return this.http.get(url) as any;
  }

}
