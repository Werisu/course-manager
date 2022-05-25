import { CourseModule } from './courses/course.module';
import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: '**', component: Error404Component }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
