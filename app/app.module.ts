import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';

import {TodoService} from './todo.service'
import {AppRoutingModule } from './app-routing.module'


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  
  providers: [TodoService],
  declarations: [ AppComponent, DashboardComponent ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
