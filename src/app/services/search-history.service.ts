import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  private readonly STORAGE_KEY = 'project_search_history';
  private readonly MAX_HISTORY_ITEMS = 10;
  private searchHistorySubject = new BehaviorSubject<string[]>([]);

  constructor() {
    this.loadSearchHistory();
  }

  getSearchHistory(): Observable<string[]> {
    return this.searchHistorySubject.asObservable();
  }

  addSearchTerm(term: string): void {
    if (!term.trim()) return;

    const currentHistory = this.searchHistorySubject.value;
    const newHistory = [
      term,
      ...currentHistory.filter(item => item !== term)
    ].slice(0, this.MAX_HISTORY_ITEMS);

    this.searchHistorySubject.next(newHistory);
    StorageUtil.setItem(this.STORAGE_KEY, newHistory);
  }

  clearHistory(): void {
    this.searchHistorySubject.next([]);
    StorageUtil.removeItem(this.STORAGE_KEY);
  }

  private loadSearchHistory(): void {
    const history = StorageUtil.getItem<string[]>(this.STORAGE_KEY) || [];
    this.searchHistorySubject.next(history);
  }
}