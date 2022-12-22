import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShareUrl } from './app.url';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baserurl = ShareUrl.url

  constructor(private _http: HttpClient) { }

  

  createContact(contact: any){
    return this._http.post<any>(this.baserurl+'contact/form',contact)
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
