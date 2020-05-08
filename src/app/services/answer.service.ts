import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { UserAnswer } from '../datamodel/UserAnswer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private baseUrl = 'api/answerlist';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getLists(): Observable<UserAnswer[]> {
    return this.http.get<UserAnswer[]>(this.baseUrl)
      .pipe(
        tap(_ => this.log('fetched AnswerLists')),
        catchError(this.handleError<UserAnswer[]>('getLists', []))
      );
  }

  addList(answer: UserAnswer):Observable<UserAnswer>{
    return this.http.post<UserAnswer>(this.baseUrl,answer,this.httpOptions).pipe(
      tap((NewAnswer:UserAnswer) => this.log(`added User Answer ${NewAnswer.id}`)),
      catchError(this.handleError<UserAnswer>('addList'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
    
  private log(message: string) {
    this.messageService.add(`AnswerService: ${message}`);
  }
}
