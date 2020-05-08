import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { QNAForm } from '../datamodel/QNAForm';
import { UserAnswer } from '../datamodel/UserAnswer';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{
  createDb(){
    const questionlist = [
      { id: 1, 
        question: 'Who is not avengers member?', 
        answer_A: 'Antman',
        answer_B: 'Superman',
        answer_C: 'Ironman',
        answer: 'B'
     }
    ];

    const answerlist = [
      {
        id: 0,
        answer: ''
      }
    ];
    return {questionlist,answerlist};
  }
  genId<T extends QNAForm | UserAnswer>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
