import {Component, Input} from '@angular/core';
import {TodoService} from '../../providers/todo.service';
import {Todo} from '../../definitions/todo';

@Component({
  selector: 'app-todo-delete-button',
  templateUrl: './todo-delete-button.component.html',
  styleUrls: ['./todo-delete-button.component.css']
})
export class TodoDeleteButtonComponent {

  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  onDelete() {
    console.log(this.todo);
    this.todoService.delete(this.todo.id).subscribe();
  }
}
