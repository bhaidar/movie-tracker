import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { material } from './ui-material';
import { StartRatingComponent } from './components/start-rating/start-rating.component';

@NgModule({
  imports: [CommonModule, RouterModule, ...material],
  declarations: [AppLayoutComponent, StartRatingComponent],
  exports: [AppLayoutComponent, ...material, StartRatingComponent]
})
export class MovieTrackerUiModule {}
