import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-twowaybinding',
  imports: [FormsModule],
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css'
})
export class TwowaybindingComponent {
  name = ""

  // 2nd way 
  // changeName(event:Event){
  //   const val = (event.target as HTMLInputElement).value
  //   this.name=val;
  // }
}
