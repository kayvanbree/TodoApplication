import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo/:id',      component: TodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    HomeComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
