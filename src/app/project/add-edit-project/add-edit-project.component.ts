import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css']
})
export class AddEditProjectComponent implements OnInit {

  constructor(private service: SharedService, private messageService: MessageService) { }

  @Input() 
  proj:any;
  id:string;
  projectName:string;
  clintName:string;
  initiationDate: Date;
  duration:number;

  ngOnInit(): void {
    this.id=this.proj.id;
    this.projectName=this.proj.projectName;
    this.clintName=this.proj.clintName;
    this.initiationDate=this.proj.initiationDate;
    this.duration=this.proj.initiationDate;
  }

  addProject(){
    var val ={
      id:this.id,
      projectName:this.projectName,
      clintName:this.clintName,
      initiationDate:this.initiationDate,
      duration:this.duration
    };
    this.service.addProject(val).subscribe(res=>{
      // alert(res.toString());
      this.messageService.add({severity:'success', summary:'Service Message', detail:res.toString()});
    });
  }

  updateProject(){
    var val ={
      id:this.id,
      projectName:this.projectName,
      clintName:this.clintName,
      initiationDate:this.initiationDate,
      duration:this.duration
    };
    this.service.updateProject(val).subscribe(res=>{
      alert(res.toString());
    });     
}
}


