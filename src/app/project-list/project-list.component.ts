import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public projects;

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService.getProjects().then(data => this.projects = data)
  }

}
