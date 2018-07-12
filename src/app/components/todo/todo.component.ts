import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked, DoCheck, OnChanges, AfterContentInit, AfterContentChecked {

  constructor() { }

  ngOnInit() {
    // Initialize the directive/component after Angular first displays the data-bound properties
    // and sets the directive/component's input properties.
    //
    // Called once, after the first ngOnChanges().
    console.log('Calling OnInit!');
  }

  ngOnDestroy() {
    // Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
    //
    // Called just before Angular destroys the directive/component.
    console.log('Calling OnDestroy!');
  }

  ngAfterViewChecked() {
    // Respond after Angular checks the component's views and child views / the view that a directive is in.
    //
    // Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().
    console.log('Calling AfterViewChecked!');
  }

  ngAfterViewInit() {
    // Respond after Angular initializes the component's views and child views / the view that a directive is in.
    //
    // Called once after the first ngAfterContentChecked().
    console.log('Calling AfterViewInit!');
  }

  ngDoCheck() {
    // Detect and act upon changes that Angular can't or won't detect on its own.
    //
    // Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
    console.log('Calling DoCheck!');
  }

  ngOnChanges() {
    // Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges
    // object of current and previous property values.
    // Called before ngOnInit() and whenever one or more data-bound input properties change.
    console.log('Calling OnChanges!');
  }

  ngAfterContentChecked() {
    // Respond after Angular checks the content projected into the directive/component.
    //
    // Called after the ngAfterContentInit() and every subsequent ngDoCheck().
    console.log('Calling AfterContentChecked!');
  }

  ngAfterContentInit() {
    // Respond after Angular projects external content into the component's view / the view that a directive is in.
    //
    // Called once after the first ngDoCheck().
    console.log('Calling AfterContentInit!');
  }
}
