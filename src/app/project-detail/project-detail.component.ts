import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  public project;

  constructor(private _projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._projectService.getProjects()
    .subscribe(
      (res: Array<Object>) => {
        let id = this.route.snapshot.paramMap.get('id');
        let i: number;
        for(i=0; i<res.length; i++){
          if (res[i]['id'] == id){ this.project=res[i]; break }
        };console.log(this.project)
      },
      (err) => console.log('Error Prj ', err),
      () => console.log('done')
    )
  }

}
