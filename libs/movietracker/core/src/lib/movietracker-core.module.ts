import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovieTrackerUiModule } from '@mt/movietracker/ui';

const modules = [
  // Angular specific shared modules
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  // Project-wide shared modules
  MovieTrackerUiModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MovieTrackerCoreModule {}
