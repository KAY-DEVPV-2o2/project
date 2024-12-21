import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchHistoryService } from '../../services/search-history.service';

@Component({
  selector: 'app-project-search',
  template: `
    <div class="search-container">
      <div class="relative">
        <input
          [formControl]="searchControl"
          type="text"
          placeholder="Search projects..."
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          *ngIf="searchControl.value"
          (click)="clearSearch()"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      <app-search-history
        (selectTerm)="onHistoryTermSelect($event)"
      ></app-search-history>
    </div>
  `
})
export class ProjectSearchComponent {
  @Output() search = new EventEmitter<string>();
  
  searchControl = new FormControl('');

  constructor(private searchHistoryService: SearchHistoryService) {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.search.emit(term || '');
      if (term) {
        this.searchHistoryService.addSearchTerm(term);
      }
    });
  }

  clearSearch(): void {
    this.searchControl.setValue('');
  }

  onHistoryTermSelect(term: string): void {
    this.searchControl.setValue(term);
  }
}