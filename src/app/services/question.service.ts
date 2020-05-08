import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { QNAForm } from '../datamodel/QNAForm';



@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = 'api/questionlist';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getLists(): Observable<QNAForm[]> {
    return this.http.get<QNAForm[]>(this.baseUrl)
      .pipe(
        tap(_ => this.log('fetched Lists')),
        catchError(this.handleError<QNAForm[]>('getLists', []))
      );
  }

  addList(mcq: QNAForm): Observable<QNAForm> {
    return this.http.post<QNAForm>(this.baseUrl, mcq, this.httpOptions).pipe(
      tap((newMCQ: QNAForm) => this.log(`added List id=${newMCQ.id}`)),
      catchError(this.handleError<QNAForm>('addList'))
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
      this.messageService.add(`QuestionService: ${message}`);
    }
}
