import { Component } from '@angular/core';
import { IModel } from '../../model/interface/allPost';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employeeform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.css',
})
export class EmployeeformComponent {
  model: IModel = {
    title: '',
    description: '',
  };
  data: IModel[] = [];
  testId: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.testId = params['id'];
    });
    const items = localStorage.getItem('data');
    if (items) {
      this.data = JSON.parse(items);
      let id = parseInt(this.testId);
      let currentObject = this.data[id];
      if (currentObject) {
        this.model = {
          title: currentObject.title,
          description: currentObject.description,
        };
      } else {
        console.log('Object not found');
      }
    }
  }

  addData() {
    if(parseInt(this.testId)){
      this.data.splice(parseInt(this.testId),1,{...this.model})
      localStorage.setItem('data', JSON.stringify(this.data));
      this.model = {
        title: '',
        description: '',
      };
      Swal.fire({
        title: 'Success',
        text: 'Record Update',
        icon: 'success',
      })
      this.testId = "";
    }else{
      this.data.push({ ...this.model });
      localStorage.setItem('data', JSON.stringify(this.data));
      this.model = {
        title: '',
        description: '',
      };
      Swal.fire({
        title: 'Success',
        text: 'Record Added',
        icon: 'success',
      })
    }
  }
}
