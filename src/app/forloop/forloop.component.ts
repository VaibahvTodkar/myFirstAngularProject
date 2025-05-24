import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css'
})
export class ForloopComponent {
  users=["Vaibhav", "Sham", "Ram","Pinkey", "Chinkey", "Pravin", "Vinay", "TOny"]

  students = [
    {name:"Vaibhav", age:23, email:"vaibhav@gmail.com"},
    {name:"Sham", age:23, email:"sham@gmail.com"},
    {name:"Pinkey", age:23, email:"Pinkey@gmail.com"},
    {name:"Ram", age:23, email:"Ram@gmail.com"},
    {name:"Chinkey", age:23, email:"Chinkey@gmail.com"}
  ]
  getName(name:string){
    console.log(name)
  }
}
