import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private ponderiDto: any = {};
  private isFemale: boolean = false;
  private currentQuestionIndex: number = 0;

  constructor() {}
 

  getCurrentQuestionIndex(): number {
    return this.currentQuestionIndex;
  }

   setCurrentQuestionIndex(index: number): void {
      this.currentQuestionIndex = index;
    
  }

  canAccessQuestion(index: number): boolean {
    return index <= this.currentQuestionIndex + 1;
  }

  setPondere(key: string, value: number) {
    this.ponderiDto[key] = value;
  }

  getPondere(key: string): number {
    return this.ponderiDto[key];
  }

  getFinalPonderiDto() {
    return this.ponderiDto;
  }

  setIsFemale(value: boolean) {
    this.isFemale = value;
  }

  getIsFemale(): boolean {
    return this.isFemale;
  }
}
