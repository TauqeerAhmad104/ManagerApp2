import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Project } from '../projectModel';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {

  sourceProjects: Project[];

  targetProjects: Project[];
  constructor(private Service: SharedService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(){
    this.Service.getproject().toPromise().then(projects => this.sourceProjects = projects);
    this.targetProjects = [];
  }

}

