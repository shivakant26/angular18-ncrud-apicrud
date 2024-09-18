import { Component , OnInit} from '@angular/core';
import { IModel } from '../../model/interface/allPost';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent implements OnInit{
  data:IModel[] = [];

  constructor(private router : Router){}
  ngOnInit(): void {
    const item = localStorage.getItem("data");
   if(item){
    this.data = JSON.parse(item)
   }
  }

  handleDelete(id:number){
    console.log(id)
    this.data.splice(id,1)
    Swal.fire({
      title: 'Success',
      text: 'Record Deleted',
      icon: 'success',
    })
    localStorage.setItem("data",JSON.stringify(this.data))
  }

  handleEdit(id:number){
    this.router.navigate([`/employee-form/${id}`])
  }
}
