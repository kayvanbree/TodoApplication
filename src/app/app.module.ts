import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
