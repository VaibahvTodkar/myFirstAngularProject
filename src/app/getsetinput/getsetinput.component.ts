import { Component } from '@angular/core';

@Component({
  selector: 'app-getsetinput',
  imports: [],
  templateUrl: './getsetinput.component.html',
  styleUrl: './getsetinput.component.css'
})
export class GetsetinputComponent {
  name=""
  displayName=""
  email=""
  getName(event:Event){
    const val=(event.target as HTMLInputElement).value
    //console.log(val);
    this.name = val
  }
  showName(){
    this.displayName=this.name
  }
  SetName(){
    this.name="Ram"
  }
  getEmail(email:string){
    this.email = email
    console.log(email)
  }
  setEmail(){
    this.email = "defult@gmail.com"
  }
}
