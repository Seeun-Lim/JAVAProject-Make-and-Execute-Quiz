import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizEditComponent } from './quiz-edit/quiz-edit.component';
import { MessagesComponent } from './messages/messages.component';
import { QuizExecuteComponent } from './quiz-execute/quiz-execute.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuizEditComponent,
    MessagesComponent,
    QuizExecuteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
