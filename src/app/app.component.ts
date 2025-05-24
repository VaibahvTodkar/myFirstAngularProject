import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { GetsetinputComponent } from './getsetinput/getsetinput.component';
import { ForloopComponent } from "./forloop/forloop.component";
import { TwowaybindingComponent } from "./twowaybinding/twowaybinding.component";
import { DirectivesComponent } from "./directives/directives.component";

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, LoginComponent, SignupComponent, ProfileComponent, GetsetinputComponent, ForloopComponent, TwowaybindingComponent, DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirstProject';
  name = 'Vaibhav Todkar';

  functionClicked(){
    console.log("Function Clicked");
    this.otherFunction();
  }

  otherFunction(){
    console.log("Other Function");
  }
}
