import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RoleComponent } from '../component/role/role.component';
import { DesignationComponent } from '../component/designation/designation.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink ,RouterOutlet,RoleComponent,DesignationComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  currentRole : string = "role";

  changeRole(tabStatus : string){
    this.currentRole = tabStatus;
  }
}
