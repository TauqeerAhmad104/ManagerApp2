import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Employee } from 'src/app/employeeModel';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employee: Employee[];
  employeeList: any[];

  constructor(private Employeeservice:SharedService) { }

  activateAddEditEmpl:boolean=false;
  employeeTitle: string;
  empl:any;

  ngOnInit() {
    
    this.Employeeservice.getEmployee().subscribe(data => this.employee = data);
    
    this.employeeList=[
      {field: 'id', header:'ID'},
      {field: 'firstName', header:'First Name'},
      {field: 'lastName', header:'Last Name'},
      {field: 'dateOfBirth', header:'DOB'},
      {field: 'phoneNo', header:'Phone'},
      {field: 'position', header:'Position'},
    ];
    
  }
 
addEmployee(){
  this.empl={
    id:0,
    firstName:'',
    lastName:'',
    dateOfBirth:'',
    phone:'',
    position:'',
  }
  this.employeeTitle="Add Employee";
  this.activateAddEditEmpl=true;

}
editEmployee(emplItem){
  this.empl=emplItem;
  this.employeeTitle="Add Employee";
  this.activateAddEditEmpl=true; 
}
deleteEmployee(emplitem){
  if(confirm('you are about to delete Employee?')){
    this.Employeeservice.deleteProject(emplitem.id).subscribe(data=>{
      alert(data.toString());
      this.refreshEmployeeList();
    });
  }

}

closeEmployee(){
  this.activateAddEditEmpl=false;
  this.refreshEmployeeList();
}
 
  refreshEmployeeList(){
    this.Employeeservice.getproject().subscribe(data=>{
      this.employeeList=data;
    });
  }
}



/* The big changes 

EmployeeList:any=[];

  // employeeTitle:string;
  // ActivateAddEditEmpComp:boolean=false;
  // emp:any;

  // ngOnInit(): void {
  //   this.refreshEmpList();
  // }

  // addEmployee(){
  //   this.emp={
  //     id:0,
  //     firstName:"",
  //     lastName:"",
  //     dateOfBirth:"",
  //     phoneNo:"",
  //     Position:"",
  //   }
  //   this.employeeTitle="Add Employee";
  //   this.ActivateAddEditEmpComp=true;

  // }

  // editClick(item){
  //   console.log(item);
  //   this.emp=item;
  //   this.employeeTitle="Edit Employee";
  //   this.ActivateAddEditEmpComp=true;
  // }

  // deleteClick(item){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
  //       alert(data.toString());
  //       this.refreshEmpList();
  //     })
  //   }
  // }

  // closeEmployee(){
  //   this.ActivateAddEditEmpComp=false;
  //   this.refreshEmpList();
  // }


  // refreshEmpList(){
  //   this.service.getEmployee().subscribe(data=>{
  //     this.EmployeeList=data;
  //   });
  // }



*/



//working with prime-ng loop testing the bootstrap
//   employee: Employee[];
//   employeeList: any[];

//   constructor(private Employeeservice:SharedService) { }

//   ngOnInit(): void {
//     this.Employeeservice.getEmployee().subscribe(data => this.employee = data);
    
//     this.employeeList=[
//       {field: 'id', header:'ID'},
//       {field: 'firstName', header:'First Name'},
//       {field: 'lastName', header:'Last Name'},
//       {field: 'dateOfBirth', header:'Date Of Birth'},
//       {field: 'phone', header:'Phone'},
//       {field: 'assignaProject', headder: 'Assign A Project'},
//       {field: 'position', header:'Position'},
//     ];
//   }

// }

