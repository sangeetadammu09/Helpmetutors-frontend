import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShareUrl } from './app.url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private messageSource = new BehaviorSubject(0);
  baserurl = ShareUrl.url


  currentMessage = this.messageSource.asObservable();


  changeMessage(provider:any){
   // console.log(provider);
    this.messageSource.next(provider);
  }


  contactEmail(body:any) {
    return this.http.post(this.baserurl + 'mail/contact', body);
    
  }
  parentEmail(body:any) {
    return this.http.post(this.baserurl + 'mail/parent', body);
    
  }
  teacherEmail(body:any) {
     return this.http.post(this.baserurl + 'mail/teacher', body);
  }

}
