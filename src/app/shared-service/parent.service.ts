import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ShareUrl} from './app.url'

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  baserurl = ShareUrl.url

  constructor(private _http: HttpClient) { }

  parentregister(parent: any){
   return  this._http.post<{message:string,regparent:{pname:string,pemail:string,password:string,cpass:string},token:string}>(this.baserurl+'parent/register', parent)
  }

  parentlogin(parent: any){
    return this._http.post<{message:string,loggedparent:{parentid:string,parentname:string},token:string}>(this.baserurl+'parent/login', parent)
  }


  createparent(parent: any){
    return this._http.post<any>(this.baserurl+'parent/form',parent)
  }


  listofparents(){
    return this._http.get<{message:string,listofparents:any}>(this.baserurl+'parent/listofparents')
  }

  singleparent(_id:string){
    return this._http.get<{message:string,singleparent:any}>(this.baserurl+'parent/'+_id)
  }

  updateparent(parent: any){
    return this._http.put<{message:string,updatedparent:any}>(this.baserurl+'parent/update'+parent._id, parent)
  }
  
  deleteparent(_id:string){
    return this._http.delete<{message:string,deletedparent:any}>(this.baserurl+'paren/delete'+_id)
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
