import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  public projects;

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService.getProjects()
    .subscribe(
      res => {this.projects = res},
      (err) => console.log('Error Prj ', err),
      () => console.log('done')
    )
  }

}
