import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteButtonComponent } from './todo-delete-button.component';

describe('TodoDeleteButtonComponent', () => {
  let component: TodoDeleteButtonComponent;
  let fixture: ComponentFixture<TodoDeleteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDeleteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
