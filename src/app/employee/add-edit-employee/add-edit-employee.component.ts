import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service:SharedService) { }
  

    @Input() emp:any;
      id:string;
      firstName:string;
      lastName:string;
      dateOfBirth:Date;
      phoneNo:number;
      Position:string;
  
    ngOnInit(): void {
      this.id=this.emp.id;
      this.firstName=this.emp.firstName;
      this.lastName=this.emp.lastName;
      this.dateOfBirth=this.emp.dateOfBirth;
      this.Position=this.emp.Position;
    }
  
    addEmployee(){
      var val ={
        id:this.id,
        firstName:this.firstName,
        lastName:this.lastName,
        dateOfBirth:this.dateOfBirth,
        Position:this.Position
      };
      this.service.addEmployee(val).subscribe(response=>{
        alert(response.toString());
      });
    }
  
    updateEmployee(){
      var val ={
        id:this.id,
        firstName:this.firstName,
        lastName:this.lastName,
        dateOfBirth:this.dateOfBirth,
        Position:this.Position
      };
      this.service.updateEmployee(val).subscribe(response=>{
        alert(response.toString());
      });     
  }
  }
  



  //This is not working tab not open
//   @Input() emp:any;
//   id:string;
//   firstName:string;
//   lastName:string;
//   dateOfBirth:Date;
//   phoneNo:number;
//   assignaProject:string;
//   Position:string;

//   ProjectList:any=[];

//   ngOnInit(): void {
//   }



//   addEmployee(){
//     var val = {id:this.id,
//                 firstName:this.firstName,
//                 lastName:this.lastName,
//                 dateOfBirth:this.dateOfBirth,
//                 phoneNo:this.phoneNo,
//               assignaProject:this.assignaProject,
//               Position:this.Position};

//     this.service.addEmployee(val).subscribe(res=>{
//       alert(res.toString());
//     });
//   }

//   updateEmployee(){
//     var val = {id:this.id,
//       firstName:this.firstName,
//       lastName:this.lastName,
//       dateOfBirth:this.dateOfBirth,
//     assignaProject:this.assignaProject,
//     Position:this.Position};

//     this.service.updateEmployee(val).subscribe(res=>{
//     alert(res.toString());
//     });
//   }

// }

