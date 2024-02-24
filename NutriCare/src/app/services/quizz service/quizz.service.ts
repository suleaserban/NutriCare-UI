import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  private ponderiDto: { [key: string]: number } = {};
  private isFemale: boolean = false;
  private isVegan: boolean = false;
  private isVegetarian: boolean = false;
  private currentQuestionIndex: number = 0;
  private totalQuestions = 31;
  private progress = new BehaviorSubject<number>(0);
  constructor() {}

  setCurrentQuestionIndex(index: number) {
    this.currentQuestionIndex = index;
    this.animateProgress(index);
  }

  private animateProgress(targetIndex: number) {
    const targetProgress = Math.round(
      (targetIndex / this.totalQuestions) * 100
    );
    const currentProgress = this.progress.getValue();
    const step = targetProgress > currentProgress ? 1 : -1;

    const interval = setInterval(() => {
      let nextProgress = this.progress.getValue() + step;
      if (
        (step > 0 && nextProgress >= targetProgress) ||
        (step < 0 && nextProgress <= targetProgress)
      ) {
        nextProgress = targetProgress;
        clearInterval(interval);
      }
      this.progress.next(nextProgress);
    }, 20);
  }

  getProgress(): Observable<number> {
    return this.progress.asObservable();
  }
  getCurrentQuestionIndex(): number {
    return this.currentQuestionIndex;
  }

  canAccessQuestion(index: number): boolean {
    return index <= this.currentQuestionIndex + 1;
  }

  public setPondere(key: string, value: number): void {
    this.ponderiDto[key] = value;
  }

  public getPondere(key: string): number {
    return this.ponderiDto[key];
  }

  getFinalPonderiDto() {
    return this.ponderiDto;
  }

  setIsFemale(value: boolean) {
    this.isFemale = value;
  }

  setIsVegan(value: boolean) {
    this.isVegan = value;
  }

  setIsVegetarian(value: boolean) {
    return (this.isVegetarian = value);
  }

  getIsVegan() {
    return this.isVegan;
  }

  gettIsVegetarian() {
    this.isVegetarian;
  }

  getIsFemale(): boolean {
    return this.isFemale;
  }
}
