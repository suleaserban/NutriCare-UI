import { Injectable } from '@angular/core';

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

  constructor() {}

  setCurrentQuestionIndex(index: number) {
    this.currentQuestionIndex = index;
  }

  getProgressForQuestion(questionNumber: number): number {
    this.setCurrentQuestionIndex(questionNumber);
    return Math.round((questionNumber / this.totalQuestions) * 100);
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
