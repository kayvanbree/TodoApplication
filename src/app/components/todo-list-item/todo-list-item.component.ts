import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../definitions/todo';
import {TodoService} from '../../providers/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onCheckboxChange() {
    console.log(this.todo);
    this.todoService.update(this.todo.id, this.todo).subscribe();
  }
}
