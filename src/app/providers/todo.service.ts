import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../definitions/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  public update(id: number, todo: Todo): Observable<any> {
    return this.http.put(this.baseUrl + '/' + id, todo);
  }

  public delete(id: number) : Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
