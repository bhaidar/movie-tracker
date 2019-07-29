import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovietrackerCoreModule } from '@mt/movietracker/core';
import { LoginComponent } from './containers/login.component';

@NgModule({
  imports: [MovietrackerCoreModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class MovietrackerAuthModule {}
