import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {ProjectComponent} from './project/project.component';
import {AddEditProjectComponent} from './project/add-edit-project/add-edit-project.component';
import {PickListComponent} from './pick-list/pick-list.component';


const routes: Routes = [
  
  {path: "employee", component:EmployeeComponent},
  {path: "project", component:ProjectComponent},
  {path: "projectadd", component: AddEditProjectComponent},
  {path: "assignments", component: PickListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
