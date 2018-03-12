import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'//same from messages
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerData={}//making this to receive object from the form
  constructor(private apiService:ApiService){ }
  //to send the data from front end to the back end e we will need a service to send that data to mongo
  post(){
    console.log(this.registerData)
    this.apiService.sendUserRegistration(this.registerData)//this is during posting through service
  }
  
}
