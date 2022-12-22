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
    return  this._http.post<{message:string,regparent:{tname:string,temail:string,password:string,cpass:string},token:string}>(this.baserurl+'teacher/register', teacher)
   }
 
  teacherlogin(teacher: any){
     return this._http.post<{message:string,loggedteacher:{teacherid:string,teachername:string},token:string}>(this.baserurl+'teacher/login', teacher)
   }

   createteacher(teacher: any){
    return this._http.post<any>(this.baserurl+'teacher/form',teacher)
  }

  listofteachers(){
    return this._http.get<{message:string,listofteachers:any}>(this.baserurl+'teacher/listofteachers')
  }

  singleteacher(_id:string){
    return this._http.get<{message:string,singleteacher:any}>(this.baserurl+'teacher/'+_id)
  }

  updateteacher(teacher: any){
    return this._http.put<{message:string,updatedteacher:any}>(this.baserurl+'teacher/update'+teacher._id, teacher)
  }
  
  deleteteacher(_id:string){
    return this._http.delete<{message:string,deletedteacher:any}>(this.baserurl+'teacher/delete'+_id)
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