import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizEditComponent } from './quiz-edit/quiz-edit.component';
import { QuizExecuteComponent } from './quiz-execute/quiz-execute.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  {path:'quiz-edit',component:QuizEditComponent},
  {path:'quiz-execute',component:QuizExecuteComponent},
  {path:'messages', component:MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
