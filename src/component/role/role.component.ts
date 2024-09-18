import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {
  title : string = "Angular Application";
  version : number = 18;
  firstname : string = "shivakant"
  dynamictype : string = "checkbox"
  selectValue : string = "";
  handleChange(){
    this.firstname = "ravikant";
  }
}
