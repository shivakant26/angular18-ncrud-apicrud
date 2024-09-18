import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { ITodos } from '../model/class/todos';
import { ApiResponseModel } from '../model/interface/allPost';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  getallTodo(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.API_URL + '/todos');
  }

  addTodo(obj: ITodos): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(
      environment.API_URL + '/todos',
      obj
    );
  }

  removeTodo(id: any): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(
      environment.API_URL + '/todos/' + id
    );
  }
}
