import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { material } from './ui-material';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
  imports: [CommonModule, RouterModule, ...material],
  declarations: [AppLayoutComponent, StarRatingComponent],
  exports: [AppLayoutComponent, ...material, StarRatingComponent]
})
export class MovieTrackerUiModule {}
