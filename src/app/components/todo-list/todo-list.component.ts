import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from '../../providers/todo.service';
import {Subscription} from 'rxjs';
import {Todo} from '../../definitions/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todoList: Todo[];
  private todoSub: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoSub = this.todoService.getAll().subscribe((result) => {
      this.todoList = result;
    });
  }

  ngOnDestroy(): void {
    this.todoSub.unsubscribe();
  }
}
