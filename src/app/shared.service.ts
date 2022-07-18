import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from './projectModel';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  push(arg0: {
  
    severity: string; summary: string; detail: string;
  }) {
    throw new Error('Method not implemented.');
  }
  readonly APIUrl="http://localhost:34640/api";

  constructor(private http: HttpClient) { }

    ToList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Project');
  }
  getproject(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/project');
  }
  addProject(val:any){
    return this.http.post(this.APIUrl+'/project',val);
  }
  updateProject(val:any){
    return this.http.put(this.APIUrl+'/project',val);
  }
  deleteProject(val:any){
    return this.http.delete(this.APIUrl+'/project/'+val);
  }

  getEmployee(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }
  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }
  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/',val);
  }
  

//   getproject() {
//     return this.http.get<any>(this.APIUrl+'/project')
//     .toPromise()
//     .then(res => <Project[]>res.data)
//     .then(data => { return data; });
// }
// addproject(val:any) {
//   return this.http.post(this.APIUrl+'/project', val)
//   .toPromise()
// }
// updateproject(val:any) {
//   return this.http.put(this.APIUrl+'/project', val)
//   .toPromise()
// }
// deleteproject(val:any) {
//   return this.http.delete(this.APIUrl+'/project', val)
//   .toPromise()
// }


}
