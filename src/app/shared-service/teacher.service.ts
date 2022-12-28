import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShareUrl } from './app.url';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  baserurl = ShareUrl.url

  constructor(private _http: HttpClient) { }

  teacherregister(teacher: any){
    return  this._http.post<any>(this.baserurl+'teacher/register', teacher)
   }
 
  teacherlogin(teacher: any){
     return this._http.post<any>(this.baserurl+'teacher/login', teacher)
   }

   createteacher(teacher: any){
    return this._http.post<any>(this.baserurl+'teacher/form',teacher)
  }

  listofteachers(){
    return this._http.get<any>(this.baserurl+'teacher/listofteachers')
  }

  singleteacher(_id:string){
    return this._http.get<any>(this.baserurl+'teacher/'+_id)
  }

  updateteacher(teacher: any){
    return this._http.put<any>(this.baserurl+'teacher/update'+teacher._id, teacher)
  }
  
  deleteteacher(_id:string){
    return this._http.delete<any>(this.baserurl+'teacher/delete'+_id)
  }


  jobApplied(job:any){
    return this._http.post<any>(this.baserurl+'teacher/applyjob',job)
  }


   //Helper Methods

   setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
}
