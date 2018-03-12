import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class ApiService {
   messagesFromServer=[]
  constructor(private http:Http) { }

  getMessages(){
    return this.http.get('http://localhost:3000/details')//this data is get from the node server and just displayed
    .subscribe(res=>{
      this.messagesFromServer=res.json()
    })
  }
//for posting from form to backend final step
  sendUserRegistration(registerData){//registerData is inside register.component.ts file
     this.http.post('http://localhost:3000/register',registerData)//this data is get from the node server and just displayed
    .subscribe(res=>{
     console.log("registered")
    })
  }
  loginUser(registerData){//registerData is inside register.component.ts file
    // this.http.post('http://localhost:3000/register',registerData)//this data is get from the node server and just displayed
  //  .subscribe(res=>{
     console.log(" login posted")
    }
  }

