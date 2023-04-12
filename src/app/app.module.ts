import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './parent2/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Parent2Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
