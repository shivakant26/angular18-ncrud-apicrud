import { Component , inject ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPOST } from '../../model/interface/allPost';
import {CommonModule} from "@angular/common"
@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  allPost : IPOST[] = [];
  http = inject(HttpClient);
  loader : boolean =  true
  // it is life cycle method
  ngOnInit():void{
    this.getData();
  }


  getData(){
    this.http.get<IPOST[]>("https://jsonplaceholder.typicode.com/posts").subscribe((res: IPOST[]) => {
      this.allPost = res;
      this.loader = false;
    }, (error) => {
      console.error("Error fetching posts:", error);
      this.loader = false;
    });
  }
}
