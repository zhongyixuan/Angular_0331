import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { Lesson8Component } from './lesson8/lesson8.component';
import { routes } from './app.routing'
import { ServiceService } from "app/service.service";
import { Lesson9Component } from './lesson9/lesson9.component';
import { Lesson10Component } from './lesson10/lesson10.component';
import { Lesson11Component } from './lesson11/lesson11.component';
import { DataService } from "app/data.service";
import { ShareModule } from "app/share.module";
import { AuthGuard } from "app/routing.guard";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Lesson1Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component,
    Lesson7Component,
    Lesson8Component,
    Lesson10Component,
    Lesson11Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ShareModule
  ],
  providers: [ServiceService,DataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
