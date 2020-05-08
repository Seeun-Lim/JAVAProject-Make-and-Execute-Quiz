import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';
import { QNAForm } from '../datamodel/QNAForm';
import { UserAnswer } from '../datamodel/UserAnswer';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-quiz-execute',
  templateUrl: './quiz-execute.component.html',
  styleUrls: ['./quiz-execute.component.css']
})
export class QuizExecuteComponent implements OnInit {

  questionlist : QNAForm[];
  answerlist : UserAnswer[];

  constructor(private questionService: QuestionService,
    private answerService:AnswerService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList():void{
    this.questionService.getLists().subscribe(questionlist => this.questionlist = questionlist);
  }

  add(realanswer:string, answer : string){
    let RealAns = realanswer.toLowerCase();
    this.answerService.addList({answer} as UserAnswer)
    .subscribe(ans => {this.answerlist.push(ans);})
    if(answer === realanswer || answer === RealAns){
      alert("Right answer, Congulaturations!");
    }else{
      alert("Wrong answer, Try again")
    }
  }
}
