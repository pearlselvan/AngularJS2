import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { ToDo } from '../emp-component/todo';
import { Todo } from './emp-component/todo';


@NgModule({
  declarations: [
    AppComponent,Todo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
