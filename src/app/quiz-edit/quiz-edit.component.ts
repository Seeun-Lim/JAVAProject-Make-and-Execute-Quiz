import { Component, OnInit } from '@angular/core';
import { QNAForm } from '../datamodel/QNAForm';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.css']
})
export class QuizEditComponent implements OnInit {

  questionlist: QNAForm[];

  constructor(private questionService: QuestionService) { 
  }

  ngOnInit() {
    this.getList();
  }

  getList():void{
    this.questionService.getLists().subscribe(questionlist => this.questionlist = questionlist);
  }

  add(question:string, answer_A:string, answer_B:string, answer_C:string,answer:string){
    this.questionService.addList({question,answer_A,answer_B,answer_C,answer} as QNAForm)
    .subscribe(mcq =>{
      this.questionlist.push(mcq);
    })
  }

}
