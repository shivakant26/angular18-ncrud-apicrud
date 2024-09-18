import { Component , inject , OnInit} from '@angular/core';
import { ITodos } from '../../model/class/todos';
import {FormsModule} from "@angular/forms";
import { CrudService } from '../../services/crud.service';
import { ApiResponseModel } from '../../model/interface/allPost';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
todosobj : ITodos = new ITodos();
todosList : any = [];
curdService = inject(CrudService)

ngOnInit(): void {
  this.loadTodo()
}

handleEdit(data:ITodos){
  this.todosobj = data;
}

loadTodo(){
  this.curdService.getallTodo().subscribe((res:ApiResponseModel)=>{
    this.todosList = res.data;
  })
}

deleteTodos(id:any){
  console.log(id)
  this.curdService.removeTodo(id).subscribe((res:ApiResponseModel)=>{
    if(res.statusCode === 200){
        Swal.fire({
          title: 'Success',
          text: `${res?.message}`,
          icon: 'success',
        })
        this.loadTodo();
    }
  })
}

saveTodo(){
  this.curdService.addTodo(this.todosobj).subscribe((res:ApiResponseModel)=>{
    console.log("res",res)
    if(res.statusCode === 201){
      Swal.fire({
        title: 'Success',
        text: 'Add todo Successfully',
        icon: 'success',
      })
      this.loadTodo();
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Somethings went Wrongs',
        icon: 'error',
      })
    }
  })
}

}
