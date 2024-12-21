import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectSearchComponent } from './components/projects/project-search.component';
import { SearchHistoryComponent } from './components/projects/search-history.component';
// ... other imports

@NgModule({
  declarations: [
    AppComponent,
    ProjectSearchComponent,
    SearchHistoryComponent,
    // ... other components
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }