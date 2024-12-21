import { Component, EventEmitter, Output } from '@angular/core';
import { SearchHistoryService } from '../../services/search-history.service';

@Component({
  selector: 'app-search-history',
  template: `
    <div class="search-history mt-2" *ngIf="searchHistory$ | async as history">
      <div class="text-sm text-gray-600 mb-2" *ngIf="history.length">Recent Searches:</div>
      <div class="flex flex-wrap gap-2">
        <button
          *ngFor="let term of history"
          (click)="onSelectTerm(term)"
          class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          {{ term }}
        </button>
        <button
          *ngIf="history.length"
          (click)="onClearHistory()"
          class="px-3 py-1 text-sm text-red-600 hover:text-red-700 transition-colors"
        >
          Clear History
        </button>
      </div>
    </div>
  `
})
export class SearchHistoryComponent {
  @Output() selectTerm = new EventEmitter<string>();
  
  searchHistory$ = this.searchHistoryService.getSearchHistory();

  constructor(private searchHistoryService: SearchHistoryService) {}

  onSelectTerm(term: string): void {
    this.selectTerm.emit(term);
  }

  onClearHistory(): void {
    this.searchHistoryService.clearHistory();
  }
}