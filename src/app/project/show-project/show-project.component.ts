import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Project } from 'src/app/projectModel';


@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  constructor( private Projectservice:SharedService) { }

  project: Project[];
  projectList: any[];

  activateAddEditComp:boolean=false;
  projectTitle: string;
  proj:any;


  ngOnInit() {
  
  
    this.Projectservice.getproject().subscribe(data => this.project = data);
    
    this.projectList=[
      {field: 'id', header:'ID'},
      {field: 'projectName', header:'Project Name'},
      {field: 'clintName', header:'Clint Name'},
      {field: 'initiationDate', header:'Initiation Date'},
      {field: 'duration', header:'Duration'},
    ];
    
  }
 
addProject(){
  this.proj={
    id:0,
    projectName:'',
    ClintName:'',
    initiationDate:'',
    duration:'',
  }
  this.projectTitle="Add Project";
  this.activateAddEditComp=true;

}
editProject(projItem){
  this.proj=projItem;
  this.projectTitle="Add Project";
  this.activateAddEditComp=true; 
}
deleteProject(projitem){
  if(confirm('you are about to delete project?')){
    this.Projectservice.deleteProject(projitem.id).subscribe(data=>{
      alert(data.toString());
      this.refreshProjectList();
    })
  }

}

closeProject(){
  this.activateAddEditComp=false;
  this.refreshProjectList();
}
 
  refreshProjectList(){
    this.Projectservice.getproject().subscribe(data=>{
      this.projectList=data;
    });
  }
}







