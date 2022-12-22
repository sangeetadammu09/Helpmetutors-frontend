import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private messageSource = new BehaviorSubject(0);
  public domain='http://localhost:3000';
//   public domain ='https://api.helpmetutors.com';


  currentMessage = this.messageSource.asObservable();


  changeMessage(provider:any){
   // console.log(provider);
    this.messageSource.next(provider);
  }


  contactEmail(body:any) {
    return this.http.post(this.domain + '/mail/contact', body);
    
  }
  parentEmail(body:any) {
    return this.http.post(this.domain + '/mail/parent', body);
    
  }
  teacherEmail(body:any) {
     return this.http.post(this.domain + '/mail/teacher', body);
  }

}
