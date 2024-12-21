import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsSectionComponent } from './projects-section.component';
import { ProjectListComponent } from './project-list.component';
import { ProjectCardComponent } from './project-card.component';
import { ProjectSearchComponent } from './project-search.component';
import { ProjectFiltersComponent } from './project-filters.component';
import { SearchHistoryComponent } from './search-history.component';

const routes: Routes = [
  { path: '', component: ProjectsSectionComponent }
];

@NgModule({
  declarations: [
    ProjectsSectionComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectSearchComponent,
    ProjectFiltersComponent,
    SearchHistoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ProjectsSectionComponent]
})
export class ProjectsModule { }