import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizExecuteComponent } from './quiz-execute.component';

describe('QuizExecuteComponent', () => {
  let component: QuizExecuteComponent;
  let fixture: ComponentFixture<QuizExecuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizExecuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
