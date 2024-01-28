import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor() {}

  getPaginatedData<T>(items: T[], pageSize: number, currentPage: number): T[] {
    const startIndex = (currentPage - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  }

  getTotalPages(itemsLength: number, pageSize: number): number {
    return Math.ceil(itemsLength / pageSize);
  }
}
