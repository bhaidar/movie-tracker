import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovieTrackerUiModule } from '@mt/movietracker/ui';
import { RouterModule } from '@angular/router';

const modules = [
  // Angular specific shared modules
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  // Project-wide shared modules
  MovieTrackerUiModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MovieTrackerCoreModule {}
